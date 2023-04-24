import * as SourceMaps from '@volar/source-map';
import { TeleportCapabilities, TeleportMappingData } from './types';
export declare class Teleport extends SourceMaps.SourceMapBase<TeleportMappingData> {
    findTeleports(start: number, filter?: (data: TeleportCapabilities) => boolean): Generator<number, void, unknown>;
}
