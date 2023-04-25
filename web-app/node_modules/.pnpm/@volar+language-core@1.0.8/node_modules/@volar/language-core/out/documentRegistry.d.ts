import { Mapping, SourceMapBase } from '@volar/source-map';
import { Teleport } from './sourceMaps';
import type { EmbeddedFile, LanguageModule, SourceFile } from './types';
export declare function forEachEmbeddeds(input: EmbeddedFile[], cb: (embedded: EmbeddedFile) => void): void;
export type DocumentRegistry = ReturnType<typeof createDocumentRegistry>;
export declare function createDocumentRegistry(): {
    get: (fileName: string) => [SourceFile, LanguageModule] | undefined;
    delete: (fileName: string) => boolean;
    has: (fileName: string) => boolean;
    set: (fileName: string, vueFile: SourceFile, languageModule: LanguageModule) => [SourceFile, LanguageModule<SourceFile>];
    getFileNames: () => string[];
    getAll: () => [SourceFile, LanguageModule<SourceFile>][];
    getTeleport: (fileName: string) => Teleport | undefined;
    getAllEmbeddeds: () => Generator<{
        sourceFile: SourceFile;
        embedded: EmbeddedFile;
    }, void, unknown>;
    fromEmbeddedLocation: (fileName: string, offset: number) => Generator<{
        fileName: string;
        offset: number;
        mapping: Mapping<any>;
        sourceMap: SourceMapBase<any>;
    } | {
        fileName: string;
        offset: number;
        mapping?: undefined;
        sourceMap?: undefined;
    }, void, unknown>;
    fromEmbeddedFile: (file: EmbeddedFile) => SourceFile | undefined;
    fromEmbeddedFileName: (fileName: string) => {
        sourceFile: SourceFile;
        embedded: EmbeddedFile;
    } | undefined;
    getSourceMap: (file: SourceFile, mappings: Mapping<any>[]) => SourceMapBase<any>;
    onSourceFileUpdated(file: SourceFile): void;
};
