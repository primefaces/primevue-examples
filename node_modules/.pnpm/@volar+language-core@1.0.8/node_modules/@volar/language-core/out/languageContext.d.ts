import type * as ts from 'typescript/lib/tsserverlibrary';
import { LanguageModule, SourceFile, LanguageServiceHost } from './types';
export type EmbeddedLanguageContext = ReturnType<typeof createEmbeddedLanguageServiceHost>;
export declare function createEmbeddedLanguageServiceHost(host: LanguageServiceHost, languageModules: LanguageModule[]): {
    typescriptLanguageServiceHost: ts.LanguageServiceHost;
    mapper: {
        get: (fileName: string) => [SourceFile, LanguageModule<SourceFile>] | undefined;
        delete: (fileName: string) => boolean;
        has: (fileName: string) => boolean;
        set: (fileName: string, vueFile: SourceFile, languageModule: LanguageModule<SourceFile>) => [SourceFile, LanguageModule<SourceFile>];
        getFileNames: () => string[];
        getAll: () => [SourceFile, LanguageModule<SourceFile>][];
        getTeleport: (fileName: string) => import("./sourceMaps").Teleport | undefined;
        getAllEmbeddeds: () => Generator<{
            sourceFile: SourceFile;
            embedded: import("./types").EmbeddedFile;
        }, void, unknown>;
        fromEmbeddedLocation: (fileName: string, offset: number) => Generator<{
            fileName: string;
            offset: number;
            mapping: import("@volar/source-map").Mapping<any>;
            sourceMap: import("@volar/source-map").SourceMapBase<any>;
        } | {
            fileName: string;
            offset: number;
            mapping?: undefined;
            sourceMap?: undefined;
        }, void, unknown>;
        fromEmbeddedFile: (file: import("./types").EmbeddedFile) => SourceFile | undefined;
        fromEmbeddedFileName: (fileName: string) => {
            sourceFile: SourceFile;
            embedded: import("./types").EmbeddedFile;
        } | undefined;
        getSourceMap: (file: SourceFile, mappings: import("@volar/source-map").Mapping<any>[]) => import("@volar/source-map").SourceMapBase<any>;
        onSourceFileUpdated(file: SourceFile): void;
    };
};
