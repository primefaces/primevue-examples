Object.defineProperty(exports, "__esModule", { value: true });
exports.createDocumentRegistry = exports.forEachEmbeddeds = void 0;
const source_map_1 = require("@volar/source-map");
const reactivity_1 = require("@vue/reactivity");
const sourceMaps_1 = require("./sourceMaps");
function forEachEmbeddeds(input, cb) {
    for (const child of input) {
        if (child) {
            cb(child);
        }
        forEachEmbeddeds(child.embeddeds, cb);
    }
}
exports.forEachEmbeddeds = forEachEmbeddeds;
function createDocumentRegistry() {
    const files = (0, reactivity_1.shallowReactive)({});
    const all = (0, reactivity_1.computed)(() => Object.values(files));
    const fileNames = (0, reactivity_1.computed)(() => all.value.map(sourceFile => sourceFile === null || sourceFile === void 0 ? void 0 : sourceFile[0].fileName));
    const embeddedDocumentsMap = (0, reactivity_1.computed)(() => {
        const map = new WeakMap();
        for (const [sourceFile] of all.value) {
            forEachEmbeddeds(sourceFile.embeddeds, embedded => {
                map.set(embedded, sourceFile);
            });
        }
        return map;
    });
    const sourceMapsByFileName = (0, reactivity_1.computed)(() => {
        const map = new Map();
        for (const [sourceFile] of all.value) {
            forEachEmbeddeds(sourceFile.embeddeds, embedded => {
                map.set(normalizePath(embedded.fileName), { sourceFile, embedded });
            });
        }
        return map;
    });
    const teleports = (0, reactivity_1.computed)(() => {
        const map = new Map();
        for (const key in files) {
            const [sourceFile] = files[key];
            forEachEmbeddeds(sourceFile.embeddeds, embedded => {
                if (embedded.teleportMappings) {
                    map.set(normalizePath(embedded.fileName), getTeleport(sourceFile, embedded.teleportMappings));
                }
            });
        }
        return map;
    });
    const _sourceMaps = new WeakMap();
    const _teleports = new WeakMap();
    return {
        get: (fileName) => files[normalizePath(fileName)],
        delete: (fileName) => delete files[normalizePath(fileName)],
        has: (fileName) => !!files[normalizePath(fileName)],
        set: (fileName, vueFile, languageModule) => files[normalizePath(fileName)] = [vueFile, languageModule],
        getFileNames: () => fileNames.value,
        getAll: () => all.value,
        getTeleport: (fileName) => teleports.value.get(normalizePath(fileName)),
        getAllEmbeddeds: function* () {
            for (const sourceMap of sourceMapsByFileName.value) {
                yield sourceMap[1];
            }
        },
        fromEmbeddedLocation: function* (fileName, offset) {
            if (fileName.endsWith('/__VLS_types.ts')) { // TODO: monkey fix
                return;
            }
            const mapped = sourceMapsByFileName.value.get(normalizePath(fileName));
            if (mapped) {
                const sourceMap = getSourceMap(mapped.sourceFile, mapped.embedded.mappings);
                for (const vueRange of sourceMap.toSourceOffsets(offset)) {
                    yield {
                        fileName: mapped.sourceFile.fileName,
                        offset: vueRange[0],
                        mapping: vueRange[1],
                        sourceMap,
                    };
                }
            }
            else {
                yield {
                    fileName,
                    offset,
                };
            }
        },
        fromEmbeddedFile: function (file) {
            return embeddedDocumentsMap.value.get(file);
        },
        fromEmbeddedFileName: function (fileName) {
            return sourceMapsByFileName.value.get(normalizePath(fileName));
        },
        getSourceMap,
        // TODO: unuse this
        onSourceFileUpdated(file) {
            _sourceMaps.delete(file);
            _teleports.delete(file);
        },
    };
    function getSourceMap(file, mappings) {
        let map1 = _sourceMaps.get(file);
        if (!map1) {
            map1 = new WeakMap();
            _sourceMaps.set(file, map1);
        }
        let map2 = map1.get(mappings);
        if (!map2) {
            map2 = new source_map_1.SourceMapBase(mappings);
            map1.set(mappings, map2);
        }
        return map2;
    }
    function getTeleport(file, mappings) {
        let map1 = _teleports.get(file);
        if (!map1) {
            map1 = new WeakMap();
            _teleports.set(file, map1);
        }
        let map2 = map1.get(mappings);
        if (!map2) {
            map2 = new sourceMaps_1.Teleport(mappings);
            map1.set(mappings, map2);
        }
        return map2;
    }
}
exports.createDocumentRegistry = createDocumentRegistry;
function normalizePath(fileName) {
    return fileName.replace(/\\/g, '/').toLowerCase();
}
//# sourceMappingURL=documentRegistry.js.map