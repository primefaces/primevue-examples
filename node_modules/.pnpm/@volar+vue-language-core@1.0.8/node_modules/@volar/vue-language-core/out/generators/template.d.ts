import { PositionCapabilities } from '@volar/language-core';
import * as CompilerDOM from '@vue/compiler-dom';
import { ResolvedVueCompilerOptions } from '../types';
export declare function isIntrinsicElement(runtimeMode: 'runtime-dom' | 'runtime-uni-app', tag: string): boolean;
export declare function generate(ts: typeof import('typescript/lib/tsserverlibrary'), vueCompilerOptions: ResolvedVueCompilerOptions, sourceTemplate: string, sourceLang: string, templateAst: CompilerDOM.RootNode, hasScriptSetup: boolean, cssScopedClasses?: string[]): {
    codeGen: import("@volar/source-map").SegmentWithData<PositionCapabilities>[];
    formatCodeGen: import("@volar/source-map").SegmentWithData<PositionCapabilities>[];
    cssCodeGen: import("@volar/source-map").SegmentWithData<PositionCapabilities>[];
    tagNames: Record<string, number[]>;
    identifiers: Set<string>;
    slotsNum: number;
};
export declare function walkElementNodes(node: CompilerDOM.RootNode | CompilerDOM.TemplateChildNode, cb: (node: CompilerDOM.ElementNode) => void): void;
export declare function getPatchForSlotNode(node: CompilerDOM.ElementNode): CompilerDOM.ForNode | undefined;
