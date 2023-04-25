Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmbeddedLanguageServiceHost = void 0;
const path_1 = require("path");
const documentRegistry_1 = require("./documentRegistry");
const reactivity_1 = require("@vue/reactivity");
function createEmbeddedLanguageServiceHost(host, languageModules) {
    for (const languageModule of languageModules.reverse()) {
        if (languageModule.proxyLanguageServiceHost) {
            const proxyApis = languageModule.proxyLanguageServiceHost(host);
            host = new Proxy(host, {
                get(target, key) {
                    if (key in proxyApis) {
                        return proxyApis[key];
                    }
                    return target[key];
                },
            });
        }
    }
    let lastProjectVersion;
    let tsProjectVersion = 0;
    const documentRegistry = (0, documentRegistry_1.createDocumentRegistry)();
    const ts = host.getTypeScriptModule();
    const tsFileVersions = new Map();
    const scriptSnapshots = new Map();
    const fileVersions = new Map();
    const _tsHost = {
        fileExists: host.fileExists
            ? fileName => {
                var _a;
                // .vue.js -> .vue
                // .vue.ts -> .vue
                // .vue.d.ts (never)
                const vueFileName = fileName.substring(0, fileName.lastIndexOf('.'));
                if (!documentRegistry.get(vueFileName)) {
                    // create virtual files
                    const scriptSnapshot = host.getScriptSnapshot(vueFileName);
                    if (scriptSnapshot) {
                        for (const langaugeModule of languageModules) {
                            const sourceFile = langaugeModule.createSourceFile(vueFileName, scriptSnapshot);
                            if (sourceFile) {
                                documentRegistry.set(vueFileName, (0, reactivity_1.shallowReactive)(sourceFile), langaugeModule);
                                break;
                            }
                        }
                    }
                }
                if (!!documentRegistry.fromEmbeddedFileName(fileName)) {
                    return true;
                }
                return !!((_a = host.fileExists) === null || _a === void 0 ? void 0 : _a.call(host, fileName));
            }
            : undefined,
        getProjectVersion: () => {
            return tsProjectVersion.toString();
        },
        getScriptFileNames,
        getScriptVersion,
        getScriptSnapshot,
        readDirectory: (_path, extensions, exclude, include, depth) => {
            var _a, _b;
            const result = (_b = (_a = host.readDirectory) === null || _a === void 0 ? void 0 : _a.call(host, _path, extensions, exclude, include, depth)) !== null && _b !== void 0 ? _b : [];
            for (const vuePath of documentRegistry.getFileNames()) {
                const vuePath2 = path_1.posix.join(_path, path_1.posix.basename(vuePath));
                if (path_1.posix.relative(_path.toLowerCase(), vuePath.toLowerCase()).startsWith('..')) {
                    continue;
                }
                if (!depth && vuePath.toLowerCase() === vuePath2.toLowerCase()) {
                    result.push(vuePath2);
                }
                else if (depth) {
                    result.push(vuePath2); // TODO: depth num
                }
            }
            return result;
        },
        getScriptKind(fileName) {
            if (documentRegistry.has(fileName))
                return ts.ScriptKind.Deferred;
            switch (path_1.posix.extname(fileName)) {
                case '.js': return ts.ScriptKind.JS;
                case '.jsx': return ts.ScriptKind.JSX;
                case '.ts': return ts.ScriptKind.TS;
                case '.tsx': return ts.ScriptKind.TSX;
                case '.json': return ts.ScriptKind.JSON;
                default: return ts.ScriptKind.Unknown;
            }
        },
    };
    return {
        typescriptLanguageServiceHost: new Proxy(_tsHost, {
            get: (target, property) => {
                update();
                return target[property] || host[property];
            },
        }),
        mapper: new Proxy(documentRegistry, {
            get: (target, property) => {
                update();
                return target[property];
            },
        }),
    };
    function update() {
        var _a;
        const newProjectVersion = (_a = host.getProjectVersion) === null || _a === void 0 ? void 0 : _a.call(host);
        const sholdUpdate = newProjectVersion === undefined || newProjectVersion !== lastProjectVersion;
        lastProjectVersion = newProjectVersion;
        if (!sholdUpdate)
            return;
        let tsFileUpdated = false;
        const remainFileNames = new Set(host.getScriptFileNames());
        const sourceFilesToUpdate = [];
        // .vue
        for (const [sourceFile, languageModule] of documentRegistry.getAll()) {
            remainFileNames.delete(sourceFile.fileName);
            const newVersion = host.getScriptVersion(sourceFile.fileName);
            if (fileVersions.get(sourceFile.fileName) !== newVersion) {
                fileVersions.set(sourceFile.fileName, newVersion);
                const snapshot = host.getScriptSnapshot(sourceFile.fileName);
                if (snapshot) {
                    // update
                    sourceFilesToUpdate.push([sourceFile, languageModule, snapshot]);
                }
                else {
                    // delete
                    if (documentRegistry.delete(sourceFile.fileName)) {
                        tsFileUpdated = true;
                    }
                }
            }
        }
        // no any vue file version change, it mean project version was update by ts file change at this time
        if (!sourceFilesToUpdate.length) {
            tsFileUpdated = true;
        }
        // add
        for (const fileName of [...remainFileNames]) {
            const snapshot = host.getScriptSnapshot(fileName);
            if (snapshot) {
                for (const languageModule of languageModules) {
                    const sourceFile = languageModule.createSourceFile(fileName, snapshot);
                    if (sourceFile) {
                        fileVersions.set(sourceFile.fileName, host.getScriptVersion(fileName));
                        documentRegistry.set(fileName, (0, reactivity_1.shallowReactive)(sourceFile), languageModule);
                        remainFileNames.delete(fileName);
                        break;
                    }
                }
            }
        }
        // .ts / .js / .d.ts / .json ...
        for (const [oldTsFileName, oldTsFileVersion] of [...tsFileVersions]) {
            const newVersion = host.getScriptVersion(oldTsFileName);
            if (oldTsFileVersion !== newVersion) {
                if (!remainFileNames.has(oldTsFileName) && !host.getScriptSnapshot(oldTsFileName)) {
                    // delete
                    tsFileVersions.delete(oldTsFileName);
                }
                else {
                    // update
                    tsFileVersions.set(oldTsFileName, newVersion);
                }
                tsFileUpdated = true;
            }
        }
        for (const nowFileName of remainFileNames) {
            if (!tsFileVersions.has(nowFileName)) {
                // add
                const newVersion = host.getScriptVersion(nowFileName);
                tsFileVersions.set(nowFileName, newVersion);
                tsFileUpdated = true;
            }
        }
        for (const [sourceFile, languageModule, snapshot] of sourceFilesToUpdate) {
            (0, documentRegistry_1.forEachEmbeddeds)(sourceFile.embeddeds, embedded => {
                fileVersions.delete(embedded.fileName);
            });
            const oldScripts = {};
            const newScripts = {};
            if (!tsFileUpdated) {
                (0, documentRegistry_1.forEachEmbeddeds)(sourceFile.embeddeds, embedded => {
                    if (embedded.kind) {
                        oldScripts[embedded.fileName] = embedded.text;
                    }
                });
            }
            languageModule.updateSourceFile(sourceFile, snapshot);
            documentRegistry.onSourceFileUpdated(sourceFile);
            if (!tsFileUpdated) {
                (0, documentRegistry_1.forEachEmbeddeds)(sourceFile.embeddeds, embedded => {
                    if (embedded.kind) {
                        newScripts[embedded.fileName] = embedded.text;
                    }
                });
            }
            if (!tsFileUpdated
                && Object.keys(oldScripts).length !== Object.keys(newScripts).length
                || Object.keys(oldScripts).some(fileName => oldScripts[fileName] !== newScripts[fileName])) {
                tsFileUpdated = true;
            }
        }
        if (tsFileUpdated) {
            tsProjectVersion++;
        }
    }
    function getScriptFileNames() {
        const tsFileNames = new Set();
        for (const mapped of documentRegistry.getAllEmbeddeds()) {
            if (mapped.embedded.kind) {
                tsFileNames.add(mapped.embedded.fileName); // virtual .ts
            }
        }
        for (const fileName of host.getScriptFileNames()) {
            if (host.isTsPlugin) {
                tsFileNames.add(fileName); // .vue + .ts
            }
            else if (!documentRegistry.has(fileName)) {
                tsFileNames.add(fileName); // .ts
            }
        }
        return [...tsFileNames];
    }
    function getScriptVersion(fileName) {
        var _a, _b, _c;
        let mapped = documentRegistry.fromEmbeddedFileName(fileName);
        if (mapped) {
            if (fileVersions.has(mapped.embedded.fileName)) {
                return fileVersions.get(mapped.embedded.fileName);
            }
            else {
                let version = (_c = (_b = (_a = ts.sys) === null || _a === void 0 ? void 0 : _a.createHash) === null || _b === void 0 ? void 0 : _b.call(_a, mapped.embedded.text)) !== null && _c !== void 0 ? _c : mapped.embedded.text;
                if (host.isTsc) {
                    // fix https://github.com/johnsoncodehk/volar/issues/1082
                    version = host.getScriptVersion(mapped.sourceFile.fileName) + ':' + version;
                }
                fileVersions.set(mapped.embedded.fileName, version);
                return version;
            }
        }
        return host.getScriptVersion(fileName);
    }
    function getScriptSnapshot(fileName) {
        const version = getScriptVersion(fileName);
        const cache = scriptSnapshots.get(fileName.toLowerCase());
        if (cache && cache[0] === version) {
            return cache[1];
        }
        const mapped = documentRegistry.fromEmbeddedFileName(fileName);
        if (mapped) {
            const snapshot = ts.ScriptSnapshot.fromString(mapped.embedded.text);
            scriptSnapshots.set(fileName.toLowerCase(), [version, snapshot]);
            return snapshot;
        }
        let tsScript = host.getScriptSnapshot(fileName);
        if (tsScript) {
            scriptSnapshots.set(fileName.toLowerCase(), [version, tsScript]);
            return tsScript;
        }
    }
}
exports.createEmbeddedLanguageServiceHost = createEmbeddedLanguageServiceHost;
//# sourceMappingURL=languageContext.js.map