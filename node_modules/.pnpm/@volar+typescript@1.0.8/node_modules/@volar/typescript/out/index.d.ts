import type * as ts from 'typescript/lib/tsserverlibrary';
import * as embedded from '@volar/language-core';
export declare function createLanguageService(host: embedded.LanguageServiceHost, mods: embedded.LanguageModule[]): ts.LanguageService;
