import { SegmentWithData, SegmentWithoutData } from 'muggle-string';
export * from 'muggle-string';
export interface Mapping<T = any> {
    source?: string;
    sourceRange: [number, number];
    generatedRange: [number, number];
    data: T;
}
export declare class SourceMapBase<Data = undefined> {
    readonly mappings: Mapping<Data>[];
    private _memo;
    private get memo();
    constructor(mappings: Mapping<Data>[]);
    toSourceOffset(start: number): readonly [number, Mapping<Data>] | undefined;
    toGeneratedOffset(start: number): readonly [number, Mapping<Data>] | undefined;
    toSourceOffsets(start: number): Generator<readonly [number, Mapping<Data>], void, unknown>;
    toGeneratedOffsets(start: number): Generator<readonly [number, Mapping<Data>], void, unknown>;
    matcing(startOffset: number, from: 'sourceRange' | 'generatedRange', to: 'sourceRange' | 'generatedRange'): Generator<readonly [number, Mapping<Data>], void, unknown>;
    matchOffset(start: number, mappedFromRange: [number, number], mappedToRange: [number, number]): number | undefined;
    private binarySearchMemo;
}
export declare function buildMappings<T>(chunks: SegmentWithoutData[] | SegmentWithData<T>[]): Mapping<T>[];
