Object.defineProperty(exports, "__esModule", { value: true });
exports.VueSourceFile = exports.VueEmbeddedFile = void 0;
const language_core_1 = require("@volar/language-core");
const source_map_1 = require("@volar/source-map");
const reactivity_1 = require("@vue/reactivity");
class VueEmbeddedFile {
    constructor(fileName) {
        this.fileName = fileName;
        this.kind = language_core_1.EmbeddedFileKind.TextFile;
        this.capabilities = {};
        this.content = [];
        this.extraMappings = [];
        this.teleportMappings = [];
    }
}
exports.VueEmbeddedFile = VueEmbeddedFile;
class VueSourceFile {
    static getSFC(plugins, fileName, snapshot) {
        var _a, _b, _c;
        if (((_a = VueSourceFile.parsedSfcCache) === null || _a === void 0 ? void 0 : _a.snapshot) === snapshot) {
            return VueSourceFile.parsedSfcCache.sfc;
        }
        // incremental update
        if (((_b = VueSourceFile.parsedSfcCache) === null || _b === void 0 ? void 0 : _b.fileName) === fileName && VueSourceFile.parsedSfcCache.plugin.updateSFC) {
            const change = snapshot.getChangeRange(VueSourceFile.parsedSfcCache.snapshot);
            if (change) {
                const newSfc = VueSourceFile.parsedSfcCache.plugin.updateSFC(VueSourceFile.parsedSfcCache.sfc, {
                    start: change.span.start,
                    end: change.span.start + change.span.length,
                    newText: snapshot.getText(change.span.start, change.span.start + change.newLength),
                });
                if (newSfc) {
                    VueSourceFile.parsedSfcCache.snapshot = snapshot;
                    VueSourceFile.parsedSfcCache.sfc = newSfc;
                    return newSfc;
                }
            }
        }
        for (const plugin of plugins) {
            const sfc = (_c = plugin.parseSFC) === null || _c === void 0 ? void 0 : _c.call(plugin, fileName, snapshot.getText(0, snapshot.getLength()));
            if (sfc) {
                if (!sfc.errors.length) {
                    VueSourceFile.parsedSfcCache = {
                        fileName,
                        snapshot,
                        sfc,
                        plugin,
                    };
                }
                return sfc;
            }
        }
    }
    static getCompiledSFCTemplate(plugins, sourceFile, newSnapshot) {
        var _a, _b, _c, _d, _e;
        if (((_a = VueSourceFile.compiledSFCTemplateCache) === null || _a === void 0 ? void 0 : _a.snapshot) === newSnapshot) {
            return {
                errors: [],
                warnings: [],
                ast: VueSourceFile.compiledSFCTemplateCache.result.ast,
            };
        }
        if (((_b = VueSourceFile.compiledSFCTemplateCache) === null || _b === void 0 ? void 0 : _b.fileName) === sourceFile.fileName
            && VueSourceFile.compiledSFCTemplateCache.template === ((_c = sourceFile.sfc.template) === null || _c === void 0 ? void 0 : _c.content)) {
            return {
                errors: [],
                warnings: [],
                ast: VueSourceFile.compiledSFCTemplateCache.result.ast,
            };
        }
        if (sourceFile.sfc.template) {
            // incremental update
            if ((_d = VueSourceFile.compiledSFCTemplateCache) === null || _d === void 0 ? void 0 : _d.plugin.updateSFCTemplate) {
                const change = newSnapshot.getChangeRange(VueSourceFile.compiledSFCTemplateCache.snapshot);
                const templateOffset = sourceFile.sfc.template.startTagEnd;
                if (change) {
                    const newText = newSnapshot.getText(change.span.start, change.span.start + change.newLength);
                    const newResult = VueSourceFile.compiledSFCTemplateCache.plugin.updateSFCTemplate(VueSourceFile.compiledSFCTemplateCache.result, {
                        start: change.span.start - templateOffset,
                        end: change.span.start + change.span.length - templateOffset,
                        newText,
                    });
                    if (newResult) {
                        VueSourceFile.compiledSFCTemplateCache.template = sourceFile.sfc.template.content;
                        VueSourceFile.compiledSFCTemplateCache.snapshot = newSnapshot;
                        VueSourceFile.compiledSFCTemplateCache.result = newResult;
                        return {
                            errors: [],
                            warnings: [],
                            ast: newResult.ast,
                        };
                    }
                }
            }
            const errors = [];
            const warnings = [];
            let options = {
                onError: (err) => errors.push(err),
                onWarn: (err) => warnings.push(err),
                expressionPlugins: ['typescript'],
            };
            for (const plugin of plugins) {
                if (plugin.resolveTemplateCompilerOptions) {
                    options = plugin.resolveTemplateCompilerOptions(options);
                }
            }
            for (const plugin of plugins) {
                let result;
                try {
                    result = (_e = plugin.compileSFCTemplate) === null || _e === void 0 ? void 0 : _e.call(plugin, sourceFile.sfc.template.lang, sourceFile.sfc.template.content, options);
                }
                catch (e) {
                    const err = e;
                    errors.push(err);
                }
                if (result || errors.length) {
                    if (result && !errors.length && !warnings.length) {
                        VueSourceFile.compiledSFCTemplateCache = {
                            fileName: sourceFile.fileName,
                            template: sourceFile.sfc.template.content,
                            snapshot: newSnapshot,
                            result: result,
                            plugin,
                        };
                    }
                    return {
                        errors,
                        warnings,
                        ast: result === null || result === void 0 ? void 0 : result.ast,
                    };
                }
            }
        }
    }
    get text() {
        return this._snapshot.value.getText(0, this._snapshot.value.getLength());
    }
    get compiledSFCTemplate() {
        return VueSourceFile.getCompiledSFCTemplate(this.plugins, this, this._snapshot.value);
    }
    get tsFileName() {
        var _a, _b;
        return (_b = (_a = this._allEmbeddeds.value.find(e => e[1].fileName.replace(this.fileName, '').match(/^\.(js|ts)x?$/))) === null || _a === void 0 ? void 0 : _a[1].fileName) !== null && _b !== void 0 ? _b : '';
    }
    get embeddeds() {
        return this._embeddeds.value;
    }
    constructor(fileName, pscriptSnapshot, ts, plugins) {
        this.fileName = fileName;
        this.pscriptSnapshot = pscriptSnapshot;
        this.ts = ts;
        this.plugins = plugins;
        this.sfc = (0, reactivity_1.reactive)({
            template: null,
            script: null,
            scriptSetup: null,
            styles: [],
            customBlocks: [],
            getTemplateAst: () => {
                var _a;
                return (_a = this.compiledSFCTemplate) === null || _a === void 0 ? void 0 : _a.ast;
            },
            scriptAst: (0, reactivity_1.computed)(() => {
                if (this.sfc.script) {
                    return this.ts.createSourceFile(this.fileName + '.' + this.sfc.script.lang, this.sfc.script.content, this.ts.ScriptTarget.Latest);
                }
            }),
            scriptSetupAst: (0, reactivity_1.computed)(() => {
                if (this.sfc.scriptSetup) {
                    return this.ts.createSourceFile(this.fileName + '.' + this.sfc.scriptSetup.lang, this.sfc.scriptSetup.content, this.ts.ScriptTarget.Latest);
                }
            }),
        }) /* avoid Sfc unwrap in .d.ts by reactive */;
        this.sfcBlocks = (0, reactivity_1.computed)(() => {
            const blocks = {};
            if (this.sfc.template) {
                blocks[this.sfc.template.name] = this.sfc.template;
            }
            if (this.sfc.script) {
                blocks[this.sfc.script.name] = this.sfc.script;
            }
            if (this.sfc.scriptSetup) {
                blocks[this.sfc.scriptSetup.name] = this.sfc.scriptSetup;
            }
            for (const block of this.sfc.styles) {
                blocks[block.name] = block;
            }
            for (const block of this.sfc.customBlocks) {
                blocks[block.name] = block;
            }
            return blocks;
        });
        this._allEmbeddeds = (0, reactivity_1.shallowRef)([]);
        this._embeddeds = (0, reactivity_1.shallowRef)([]);
        this._snapshot = (0, reactivity_1.shallowRef)(this.pscriptSnapshot);
        this.update(this._snapshot.value, true);
    }
    update(newScriptSnapshot, init = false) {
        const self = this;
        if (newScriptSnapshot === this._snapshot.value && !init) {
            return;
        }
        const parsedSfc = VueSourceFile.getSFC(this.plugins, this.fileName, newScriptSnapshot);
        this._snapshot.value = newScriptSnapshot;
        // TODO: wait for https://github.com/vuejs/core/pull/5912
        if (parsedSfc) {
            updateTemplate(parsedSfc.descriptor.template);
            updateScript(parsedSfc.descriptor.script);
            updateScriptSetup(parsedSfc.descriptor.scriptSetup);
            updateStyles(parsedSfc.descriptor.styles);
            updateCustomBlocks(parsedSfc.descriptor.customBlocks);
        }
        else {
            updateTemplate(null);
            updateScript(null);
            updateScriptSetup(null);
            updateStyles([]);
            updateCustomBlocks([]);
        }
        VueSourceFile.current.value = this;
        this._allEmbeddeds.value = VueSourceFile._allEmbeddeds.value;
        this._embeddeds.value = VueSourceFile._embeddeds.value;
        function updateTemplate(block) {
            var _a;
            const newData = block ? {
                name: 'template',
                start: self._snapshot.value.getText(0, block.loc.start.offset).lastIndexOf('<'),
                end: block.loc.end.offset + self._snapshot.value.getText(block.loc.end.offset, self._snapshot.value.getLength()).indexOf('>') + 1,
                startTagEnd: block.loc.start.offset,
                endTagStart: block.loc.end.offset,
                content: block.content,
                lang: (_a = block.lang) !== null && _a !== void 0 ? _a : 'html',
            } : null;
            if (self.sfc.template && newData) {
                updateBlock(self.sfc.template, newData);
            }
            else {
                self.sfc.template = newData;
            }
        }
        function updateScript(block) {
            var _a;
            const newData = block ? {
                name: 'script',
                start: self._snapshot.value.getText(0, block.loc.start.offset).lastIndexOf('<'),
                end: block.loc.end.offset + self._snapshot.value.getText(block.loc.end.offset, self._snapshot.value.getLength()).indexOf('>') + 1,
                startTagEnd: block.loc.start.offset,
                endTagStart: block.loc.end.offset,
                content: block.content,
                lang: (_a = block.lang) !== null && _a !== void 0 ? _a : 'js',
                src: block.src,
            } : null;
            if (self.sfc.script && newData) {
                updateBlock(self.sfc.script, newData);
            }
            else {
                self.sfc.script = newData;
            }
        }
        function updateScriptSetup(block) {
            var _a;
            const newData = block ? {
                name: 'scriptSetup',
                start: self._snapshot.value.getText(0, block.loc.start.offset).lastIndexOf('<'),
                end: block.loc.end.offset + self._snapshot.value.getText(block.loc.end.offset, self._snapshot.value.getLength()).indexOf('>') + 1,
                startTagEnd: block.loc.start.offset,
                endTagStart: block.loc.end.offset,
                content: block.content,
                lang: (_a = block.lang) !== null && _a !== void 0 ? _a : 'js',
                generic: typeof block.attrs.generic === 'string' ? block.attrs.generic : undefined,
                genericOffset: typeof block.attrs.generic === 'string' ? newScriptSnapshot.getText(0, newScriptSnapshot.getLength()).substring(0, block.loc.start.offset).lastIndexOf(block.attrs.generic) - block.loc.start.offset : -1,
            } : null;
            if (self.sfc.scriptSetup && newData) {
                updateBlock(self.sfc.scriptSetup, newData);
            }
            else {
                self.sfc.scriptSetup = newData;
            }
        }
        function updateStyles(blocks) {
            var _a;
            for (let i = 0; i < blocks.length; i++) {
                const block = blocks[i];
                const newData = {
                    name: 'style_' + i,
                    start: self._snapshot.value.getText(0, block.loc.start.offset).lastIndexOf('<'),
                    end: block.loc.end.offset + self._snapshot.value.getText(block.loc.end.offset, self._snapshot.value.getLength()).indexOf('>') + 1,
                    startTagEnd: block.loc.start.offset,
                    endTagStart: block.loc.end.offset,
                    content: block.content,
                    lang: (_a = block.lang) !== null && _a !== void 0 ? _a : 'css',
                    module: typeof block.module === 'string' ? block.module : block.module ? '$style' : undefined,
                    scoped: !!block.scoped,
                };
                if (self.sfc.styles.length > i) {
                    updateBlock(self.sfc.styles[i], newData);
                }
                else {
                    self.sfc.styles.push(newData);
                }
            }
            while (self.sfc.styles.length > blocks.length) {
                self.sfc.styles.pop();
            }
        }
        function updateCustomBlocks(blocks) {
            var _a;
            for (let i = 0; i < blocks.length; i++) {
                const block = blocks[i];
                const newData = {
                    name: 'customBlock_' + i,
                    start: self._snapshot.value.getText(0, block.loc.start.offset).lastIndexOf('<'),
                    end: block.loc.end.offset + self._snapshot.value.getText(block.loc.end.offset, self._snapshot.value.getLength()).indexOf('>') + 1,
                    startTagEnd: block.loc.start.offset,
                    endTagStart: block.loc.end.offset,
                    content: block.content,
                    lang: (_a = block.lang) !== null && _a !== void 0 ? _a : 'txt',
                    type: block.type,
                };
                if (self.sfc.customBlocks.length > i) {
                    updateBlock(self.sfc.customBlocks[i], newData);
                }
                else {
                    self.sfc.customBlocks.push(newData);
                }
            }
            while (self.sfc.customBlocks.length > blocks.length) {
                self.sfc.customBlocks.pop();
            }
        }
        function updateBlock(oldBlock, newBlock) {
            for (let key in newBlock) {
                oldBlock[key] = newBlock[key];
            }
        }
    }
}
exports.VueSourceFile = VueSourceFile;
VueSourceFile.current = (0, reactivity_1.shallowRef)({});
VueSourceFile._pluginEmbeddedFiles = (0, reactivity_1.computed)(() => VueSourceFile.current.value.plugins.map(plugin => {
    const embeddedFiles = {};
    const files = (0, reactivity_1.computed)(() => {
        if (plugin.getEmbeddedFileNames) {
            const embeddedFileNames = plugin.getEmbeddedFileNames(VueSourceFile.current.value.fileName, VueSourceFile.current.value.sfc);
            for (const oldFileName of Object.keys(embeddedFiles)) {
                if (!embeddedFileNames.includes(oldFileName)) {
                    delete embeddedFiles[oldFileName];
                }
            }
            for (const embeddedFileName of embeddedFileNames) {
                if (!embeddedFiles[embeddedFileName]) {
                    embeddedFiles[embeddedFileName] = (0, reactivity_1.computed)(() => {
                        const file = new VueEmbeddedFile(embeddedFileName);
                        for (const plugin of VueSourceFile.current.value.plugins) {
                            if (plugin.resolveEmbeddedFile) {
                                plugin.resolveEmbeddedFile(VueSourceFile.current.value.fileName, VueSourceFile.current.value.sfc, file);
                            }
                        }
                        return file;
                    });
                }
            }
        }
        return Object.values(embeddedFiles);
    });
    return (0, reactivity_1.computed)(() => {
        return files.value.map(_file => {
            const file = _file.value;
            const mappings = [...(0, source_map_1.buildMappings)(file.content), ...file.extraMappings];
            for (const mapping of mappings) {
                if (mapping.source !== undefined) {
                    const block = VueSourceFile.current.value.sfcBlocks.value[mapping.source];
                    if (block) {
                        mapping.sourceRange = [
                            mapping.sourceRange[0] + block.startTagEnd,
                            mapping.sourceRange[1] + block.startTagEnd,
                        ];
                        mapping.source = undefined;
                    }
                }
            }
            const node = {
                fileName: file.fileName,
                text: (0, source_map_1.toString)(file.content),
                mappings,
                capabilities: file.capabilities,
                kind: file.kind,
                teleportMappings: file.teleportMappings,
                embeddeds: [],
            };
            return [file, node];
        });
    });
}));
VueSourceFile._allEmbeddeds = (0, reactivity_1.computed)(() => {
    const all = [];
    for (const embeddedFiles of VueSourceFile._pluginEmbeddedFiles.value) {
        for (const embedded of embeddedFiles.value) {
            all.push(embedded);
        }
    }
    return all;
});
VueSourceFile._embeddeds = (0, reactivity_1.computed)(() => {
    const childs = [];
    // const embeddeds: EmbeddedStructure[] = [];
    let remain = [...VueSourceFile._allEmbeddeds.value];
    while (remain.length) {
        const beforeLength = remain.length;
        consumeRemain();
        if (beforeLength === remain.length) {
            break;
        }
    }
    for (const [embedded, node] of remain) {
        childs.push(node);
        if (embedded) {
            console.error('Unable to resolve embedded: ' + embedded.parentFileName + ' -> ' + embedded.fileName);
        }
    }
    return childs;
    function consumeRemain() {
        for (let i = remain.length - 1; i >= 0; i--) {
            const [embedded, node] = remain[i];
            if (!embedded.parentFileName) {
                childs.push(node);
                remain.splice(i, 1);
            }
            else {
                const parent = findParentStructure(embedded.parentFileName, childs);
                if (parent) {
                    parent.embeddeds.push(node);
                    remain.splice(i, 1);
                }
            }
        }
    }
    function findParentStructure(fileName, strus) {
        for (const stru of strus) {
            if (stru.fileName === fileName) {
                return stru;
            }
            let _stru = findParentStructure(fileName, stru.embeddeds);
            if (_stru) {
                return _stru;
            }
        }
    }
});
//# sourceMappingURL=sourceFile.js.map