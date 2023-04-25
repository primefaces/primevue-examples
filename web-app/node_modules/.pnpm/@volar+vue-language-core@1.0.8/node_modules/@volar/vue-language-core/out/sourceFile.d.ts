import { DocumentCapabilities, EmbeddedFile, EmbeddedFileKind, PositionCapabilities, SourceFile, TeleportMappingData } from '@volar/language-core';
import { Mapping, Segment } from '@volar/source-map';
import * as CompilerDom from '@vue/compiler-dom';
import { SFCParseResult } from '@vue/compiler-sfc';
import { ComputedRef, Ref } from '@vue/reactivity';
import type * as ts from 'typescript/lib/tsserverlibrary';
import { Sfc, SfcBlock, VueLanguagePlugin } from './types';
export declare class VueEmbeddedFile {
    fileName: string;
    parentFileName?: string;
    kind: EmbeddedFileKind;
    capabilities: DocumentCapabilities;
    content: Segment<PositionCapabilities>[];
    extraMappings: Mapping<PositionCapabilities>[];
    teleportMappings: Mapping<TeleportMappingData>[];
    constructor(fileName: string);
}
export declare class VueSourceFile implements SourceFile {
    fileName: string;
    private pscriptSnapshot;
    private ts;
    private plugins;
    static parsedSfcCache: {
        fileName: string;
        snapshot: ts.IScriptSnapshot;
        sfc: SFCParseResult;
        plugin: ReturnType<VueLanguagePlugin>;
    } | undefined;
    static compiledSFCTemplateCache: {
        fileName: string;
        template: string;
        snapshot: ts.IScriptSnapshot;
        result: CompilerDom.CodegenResult;
        plugin: ReturnType<VueLanguagePlugin>;
    } | undefined;
    static getSFC(plugins: ReturnType<VueLanguagePlugin>[], fileName: string, snapshot: ts.IScriptSnapshot): SFCParseResult | undefined;
    static getCompiledSFCTemplate(plugins: ReturnType<VueLanguagePlugin>[], sourceFile: VueSourceFile, newSnapshot: ts.IScriptSnapshot): {
        errors: CompilerDom.CompilerError[];
        warnings: CompilerDom.CompilerError[];
        ast: CompilerDom.RootNode | undefined;
    } | undefined;
    static current: import("@vue/reactivity").ShallowRef<VueSourceFile>;
    static _pluginEmbeddedFiles: ComputedRef<ComputedRef<[VueEmbeddedFile, EmbeddedFile][]>[]>;
    static _allEmbeddeds: ComputedRef<[VueEmbeddedFile, EmbeddedFile][]>;
    static _embeddeds: ComputedRef<EmbeddedFile[]>;
    sfc: Sfc;
    sfcBlocks: ComputedRef<Record<string, SfcBlock>>;
    get text(): string;
    get compiledSFCTemplate(): {
        errors: CompilerDom.CompilerError[];
        warnings: CompilerDom.CompilerError[];
        ast: CompilerDom.RootNode | undefined;
    } | undefined;
    get tsFileName(): string;
    get embeddeds(): EmbeddedFile[];
    _snapshot: Ref<ts.IScriptSnapshot>;
    _allEmbeddeds: import("@vue/reactivity").ShallowRef<[VueEmbeddedFile, EmbeddedFile][]>;
    _embeddeds: import("@vue/reactivity").ShallowRef<EmbeddedFile[]>;
    constructor(fileName: string, pscriptSnapshot: ts.IScriptSnapshot, ts: typeof import('typescript/lib/tsserverlibrary'), plugins: ReturnType<VueLanguagePlugin>[]);
    update(newScriptSnapshot: ts.IScriptSnapshot, init?: boolean): void;
}
