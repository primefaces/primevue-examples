import type * as embedded from '@volar/language-core';
import { VueLanguagePlugin, VueCompilerOptions } from './types';
export declare function createLanguageModule(ts: typeof import('typescript/lib/tsserverlibrary'), rootDir: string, compilerOptions: ts.CompilerOptions, _vueCompilerOptions: VueCompilerOptions, exts: string[], extraPlugins?: VueLanguagePlugin[]): embedded.LanguageModule;
