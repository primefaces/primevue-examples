import * as rollup from 'rollup';
import { Options } from './types.js';
import '@rollup/pluginutils';
import 'unplugin';
import '@antfu/utils';

declare const _default: (options: Options) => rollup.Plugin | rollup.Plugin[];

export { _default as default };
