Object.defineProperty(exports, "__esModule", { value: true });
exports.loadTsLib = exports.createProgramProxy = void 0;
const ts = require("typescript/lib/tsserverlibrary");
const vue = require("@volar/vue-language-core");
const vueTs = require("@volar/vue-typescript");
function createProgramProxy(options, // rootNamesOrOptions: readonly string[] | CreateProgramOptions,
_options, _host, _oldProgram, _configFileParsingDiagnostics) {
    if (!options.options.noEmit && !options.options.emitDeclarationOnly)
        return doThrow('js emit is not support');
    if (!options.host)
        return doThrow('!options.host');
    let program = options.oldProgram;
    if (!program) {
        const ctx = {
            projectVersion: 0,
            options: options,
        };
        const vueCompilerOptions = getVueCompilerOptions();
        const scripts = new Map();
        const vueLsHost = new Proxy({
            resolveModuleNames: undefined,
            writeFile: (fileName, content) => {
                if (fileName.indexOf('__VLS_') === -1) {
                    ctx.options.host.writeFile(fileName, content, false);
                }
            },
            getCompilationSettings: () => ctx.options.options,
            getVueCompilationSettings: () => vueCompilerOptions,
            getScriptFileNames: () => {
                return ctx.options.rootNames;
            },
            getScriptVersion,
            getScriptSnapshot,
            getProjectVersion: () => {
                return ctx.projectVersion.toString();
            },
            getProjectReferences: () => ctx.options.projectReferences,
            getTypeScriptModule: () => ts,
            isTsc: true,
        }, {
            get: (target, property) => {
                if (property in target) {
                    return target[property];
                }
                return ctx.options.host[property];
            },
        });
        const vueTsLs = vueTs.createLanguageService(vueLsHost);
        program = vueTsLs.getProgram();
        program.__VLS_ctx = ctx;
        function getVueCompilerOptions() {
            const tsConfig = ctx.options.options.configFilePath;
            if (typeof tsConfig === 'string') {
                return vue.createParsedCommandLine(ts, ts.sys, tsConfig, []).vueOptions;
            }
            return {};
        }
        function getScriptVersion(fileName) {
            var _a, _b;
            return (_b = (_a = getScript(fileName)) === null || _a === void 0 ? void 0 : _a.version) !== null && _b !== void 0 ? _b : '';
        }
        function getScriptSnapshot(fileName) {
            var _a;
            return (_a = getScript(fileName)) === null || _a === void 0 ? void 0 : _a.scriptSnapshot;
        }
        function getScript(fileName) {
            var _a, _b, _c, _d, _e, _f, _g;
            const script = scripts.get(fileName);
            if ((script === null || script === void 0 ? void 0 : script.projectVersion) === ctx.projectVersion) {
                return script;
            }
            const modifiedTime = (_d = (_c = (_b = (_a = ts.sys).getModifiedTime) === null || _b === void 0 ? void 0 : _b.call(_a, fileName)) === null || _c === void 0 ? void 0 : _c.valueOf()) !== null && _d !== void 0 ? _d : 0;
            if ((script === null || script === void 0 ? void 0 : script.modifiedTime) === modifiedTime) {
                return script;
            }
            if (ctx.options.host.fileExists(fileName)) {
                const fileContent = ctx.options.host.readFile(fileName);
                if (fileContent !== undefined) {
                    const script = {
                        projectVersion: ctx.projectVersion,
                        modifiedTime,
                        scriptSnapshot: ts.ScriptSnapshot.fromString(fileContent),
                        version: (_g = (_f = (_e = ctx.options.host).createHash) === null || _f === void 0 ? void 0 : _f.call(_e, fileContent)) !== null && _g !== void 0 ? _g : fileContent,
                    };
                    scripts.set(fileName, script);
                    return script;
                }
            }
        }
    }
    else {
        program.__VLS_ctx.options = options;
        program.__VLS_ctx.projectVersion++;
    }
    for (const rootName of options.rootNames) {
        // register file watchers
        options.host.getSourceFile(rootName, ts.ScriptTarget.ESNext);
    }
    return program;
}
exports.createProgramProxy = createProgramProxy;
function loadTsLib() {
    return ts;
}
exports.loadTsLib = loadTsLib;
function doThrow(msg) {
    console.error(msg);
    throw msg;
}
//# sourceMappingURL=proxy.js.map