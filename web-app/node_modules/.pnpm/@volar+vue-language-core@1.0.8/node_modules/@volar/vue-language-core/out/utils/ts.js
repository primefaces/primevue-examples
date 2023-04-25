Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveVueCompilerOptions = exports.createParsedCommandLine = exports.createParsedCommandLineByJson = void 0;
const path = require("path");
function createParsedCommandLineByJson(ts, parseConfigHost, rootDir, json, extraFileExtensions) {
    const tsConfigPath = path.join(rootDir, 'jsconfig.json');
    const content = ts.parseJsonConfigFileContent(json, parseConfigHost, rootDir, {}, tsConfigPath, undefined, extraFileExtensions);
    return createParsedCommandLineBase(ts, parseConfigHost, content, tsConfigPath, extraFileExtensions, new Set());
}
exports.createParsedCommandLineByJson = createParsedCommandLineByJson;
function createParsedCommandLine(ts, parseConfigHost, tsConfigPath, extraFileExtensions, extendsSet = new Set()) {
    const config = ts.readJsonConfigFile(tsConfigPath, parseConfigHost.readFile);
    const content = ts.parseJsonSourceFileConfigFileContent(config, parseConfigHost, path.dirname(tsConfigPath), {}, tsConfigPath, undefined, extraFileExtensions);
    // fix https://github.com/johnsoncodehk/volar/issues/1786
    // https://github.com/microsoft/TypeScript/issues/30457
    // patching ts server broke with outDir + rootDir + composite/incremental
    content.options.outDir = undefined;
    return createParsedCommandLineBase(ts, parseConfigHost, content, tsConfigPath, extraFileExtensions, extendsSet);
}
exports.createParsedCommandLine = createParsedCommandLine;
function createParsedCommandLineBase(ts, parseConfigHost, content, tsConfigPath, extraFileExtensions, extendsSet) {
    let vueOptions = {};
    const folder = path.dirname(tsConfigPath);
    extendsSet.add(tsConfigPath);
    if (content.raw.extends) {
        try {
            const extendsPath = require.resolve(content.raw.extends, { paths: [folder] });
            if (!extendsSet.has(extendsPath)) {
                vueOptions = createParsedCommandLine(ts, parseConfigHost, extendsPath, extraFileExtensions, extendsSet).vueOptions;
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    return Object.assign(Object.assign({}, content), { vueOptions: Object.assign(Object.assign({}, vueOptions), content.raw.vueCompilerOptions) });
}
function resolveVueCompilerOptions(vueOptions) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    const target = (_a = vueOptions.target) !== null && _a !== void 0 ? _a : 3;
    return Object.assign(Object.assign({}, vueOptions), { target, jsxTemplates: (_b = vueOptions.jsxTemplates) !== null && _b !== void 0 ? _b : false, strictTemplates: (_c = vueOptions.strictTemplates) !== null && _c !== void 0 ? _c : false, skipTemplateCodegen: (_d = vueOptions.skipTemplateCodegen) !== null && _d !== void 0 ? _d : false, dataAttributes: (_e = vueOptions.dataAttributes) !== null && _e !== void 0 ? _e : [], htmlAttributes: (_f = vueOptions.htmlAttributes) !== null && _f !== void 0 ? _f : ['aria-*'], optionsWrapper: (_g = vueOptions.optionsWrapper) !== null && _g !== void 0 ? _g : (target >= 2.7
            ? [`(await import('vue')).defineComponent(`, `)`]
            : [`(await import('vue')).default.extend(`, `)`]), narrowingTypesInInlineHandlers: (_h = vueOptions.narrowingTypesInInlineHandlers) !== null && _h !== void 0 ? _h : false, plugins: (_j = vueOptions.plugins) !== null && _j !== void 0 ? _j : [], bypassDefineComponentToExposePropsAndEmitsForJsScriptSetupComponents: (_k = vueOptions.bypassDefineComponentToExposePropsAndEmitsForJsScriptSetupComponents) !== null && _k !== void 0 ? _k : true, 
        // experimental
        experimentalRuntimeMode: (_l = vueOptions.experimentalRuntimeMode) !== null && _l !== void 0 ? _l : 'runtime-dom', experimentalResolveStyleCssClasses: (_m = vueOptions.experimentalResolveStyleCssClasses) !== null && _m !== void 0 ? _m : 'scoped', experimentalRfc436: (_o = vueOptions.experimentalRfc436) !== null && _o !== void 0 ? _o : false, 
        // https://github.com/vuejs/vue-next/blob/master/packages/compiler-dom/src/transforms/vModel.ts#L49-L51
        // https://v3.vuejs.org/guide/forms.html#basic-usage
        experimentalModelPropName: (_p = vueOptions.experimentalModelPropName) !== null && _p !== void 0 ? _p : {
            '': {
                'input': { type: 'radio' },
            },
            'checked': {
                'input': { type: 'checkbox' },
            },
            'value': {
                'input': true,
                'textarea': true,
                'select': true,
            },
        } });
}
exports.resolveVueCompilerOptions = resolveVueCompilerOptions;
//# sourceMappingURL=ts.js.map