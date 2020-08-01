export interface ICommonAudioContext {
    readonly baseLatency: number;
    close(): Promise<void>;
    resume(): Promise<void>;
    suspend(): Promise<void>;
}
//# sourceMappingURL=/build/es2019/interfaces/common-audio-context.d.ts.map