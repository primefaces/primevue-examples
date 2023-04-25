Object.defineProperty(exports, "__esModule", { value: true });
exports.collectCssVars = exports.collectStyleCssClasses = void 0;
const reactivity_1 = require("@vue/reactivity");
const script_1 = require("../generators/script");
const templateGen = require("../generators/template");
const scriptRanges_1 = require("../parsers/scriptRanges");
const scriptSetupRanges_1 = require("../parsers/scriptSetupRanges");
const language_core_1 = require("@volar/language-core");
const parseCssClassNames_1 = require("../utils/parseCssClassNames");
const parseCssVars_1 = require("../utils/parseCssVars");
const plugin = ({ modules, vueCompilerOptions, compilerOptions }) => {
    const ts = modules.typescript;
    const _fileName = (0, reactivity_1.shallowRef)('');
    const _sfc = (0, reactivity_1.shallowRef)({});
    const lang = (0, reactivity_1.computed)(() => {
        let lang = !_sfc.value.script && !_sfc.value.scriptSetup ? 'ts'
            : _sfc.value.scriptSetup && _sfc.value.scriptSetup.lang !== 'js' ? _sfc.value.scriptSetup.lang
                : _sfc.value.script && _sfc.value.script.lang !== 'js' ? _sfc.value.script.lang
                    : 'js';
        if (vueCompilerOptions.jsxTemplates) {
            if (lang === 'js') {
                lang = 'jsx';
            }
            else if (lang === 'ts') {
                lang = 'tsx';
            }
        }
        return lang;
    });
    const cssVars = (0, reactivity_1.computed)(() => collectCssVars(_sfc.value));
    const scriptRanges = (0, reactivity_1.computed)(() => _sfc.value.scriptAst
        ? (0, scriptRanges_1.parseScriptRanges)(ts, _sfc.value.scriptAst, !!_sfc.value.scriptSetup, false)
        : undefined);
    const scriptSetupRanges = (0, reactivity_1.computed)(() => _sfc.value.scriptSetupAst
        ? (0, scriptSetupRanges_1.parseScriptSetupRanges)(ts, _sfc.value.scriptSetupAst)
        : undefined);
    const cssModuleClasses = (0, reactivity_1.computed)(() => collectStyleCssClasses(_sfc.value, style => !!style.module));
    const cssScopedClasses = (0, reactivity_1.computed)(() => collectStyleCssClasses(_sfc.value, style => {
        const setting = vueCompilerOptions.experimentalResolveStyleCssClasses;
        return (setting === 'scoped' && style.scoped) || setting === 'always';
    }));
    const htmlGen = (0, reactivity_1.computed)(() => {
        var _a, _b, _c, _d;
        const templateAst = _sfc.value.getTemplateAst();
        if (!templateAst)
            return;
        return templateGen.generate(ts, vueCompilerOptions, (_b = (_a = _sfc.value.template) === null || _a === void 0 ? void 0 : _a.content) !== null && _b !== void 0 ? _b : '', (_d = (_c = _sfc.value.template) === null || _c === void 0 ? void 0 : _c.lang) !== null && _d !== void 0 ? _d : 'html', templateAst, !!_sfc.value.scriptSetup, Object.values(cssScopedClasses.value).map(style => style.classNames).flat());
    });
    const tsxGen = (0, reactivity_1.computed)(() => (0, script_1.generate)(ts, _fileName.value, _sfc.value, lang.value, scriptRanges.value, scriptSetupRanges.value, cssVars.value, cssModuleClasses.value, cssScopedClasses.value, htmlGen.value, compilerOptions, vueCompilerOptions));
    return {
        version: 1,
        getEmbeddedFileNames(fileName, sfc) {
            _fileName.value = fileName;
            _sfc.value = sfc;
            const fileNames = [];
            if (['js', 'ts', 'jsx', 'tsx'].includes(lang.value)) {
                fileNames.push(fileName + '.' + lang.value);
            }
            if (sfc.template) {
                fileNames.push(fileName + '.__VLS_template_format.tsx');
                fileNames.push(fileName + '.__VLS_template_style.css');
            }
            return fileNames;
        },
        resolveEmbeddedFile(fileName, sfc, embeddedFile) {
            var _a, _b;
            _fileName.value = fileName;
            _sfc.value = sfc;
            const suffix = embeddedFile.fileName.replace(fileName, '');
            if (suffix === '.' + lang.value) {
                embeddedFile.kind = language_core_1.EmbeddedFileKind.TypeScriptHostFile;
                embeddedFile.capabilities = {
                    diagnostic: true,
                    foldingRange: false,
                    documentFormatting: false,
                    documentSymbol: false,
                    codeAction: true,
                    inlayHint: true,
                };
                const tsx = tsxGen.value;
                if (tsx) {
                    embeddedFile.content = [...tsx.codeGen];
                    embeddedFile.extraMappings = [...tsx.extraMappings];
                    embeddedFile.teleportMappings = [...tsx.teleports];
                }
            }
            else if (suffix.match(/^\.__VLS_template_format\.tsx$/)) {
                embeddedFile.parentFileName = fileName + '.template.' + ((_a = sfc.template) === null || _a === void 0 ? void 0 : _a.lang);
                embeddedFile.capabilities = {
                    diagnostic: false,
                    foldingRange: false,
                    documentFormatting: true,
                    documentSymbol: true,
                    codeAction: false,
                    inlayHint: false,
                };
                if (htmlGen.value) {
                    embeddedFile.content = [...htmlGen.value.formatCodeGen];
                }
            }
            else if (suffix.match(/^\.__VLS_template_style\.css$/)) {
                embeddedFile.parentFileName = fileName + '.template.' + ((_b = sfc.template) === null || _b === void 0 ? void 0 : _b.lang);
                if (htmlGen.value) {
                    embeddedFile.content = [...htmlGen.value.cssCodeGen];
                }
            }
        },
    };
};
exports.default = plugin;
function collectStyleCssClasses(sfc, condition) {
    const result = [];
    for (let i = 0; i < sfc.styles.length; i++) {
        const style = sfc.styles[i];
        if (condition(style)) {
            const classNameRanges = [...(0, parseCssClassNames_1.parseCssClassNames)(style.content)];
            result.push({
                style: style,
                index: i,
                classNameRanges: classNameRanges,
                classNames: classNameRanges.map(range => style.content.substring(range.start + 1, range.end)),
            });
        }
    }
    return result;
}
exports.collectStyleCssClasses = collectStyleCssClasses;
function collectCssVars(sfc) {
    const result = [];
    for (let i = 0; i < sfc.styles.length; i++) {
        const style = sfc.styles[i];
        result.push({
            style,
            ranges: [...(0, parseCssVars_1.parseCssVars)(style.content)],
        });
    }
    return result;
}
exports.collectCssVars = collectCssVars;
//# sourceMappingURL=vue-tsx.js.map