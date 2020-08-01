import { IAudioNodeRenderer, IAudioWorkletNode, IAudioWorkletNodeOptions, IAudioWorkletProcessorConstructor, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
export declare type TAudioWorkletNodeRendererFactory = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>(name: string, options: {
    outputChannelCount: number[];
} & IAudioWorkletNodeOptions, processorConstructor: undefined | IAudioWorkletProcessorConstructor) => IAudioNodeRenderer<T, IAudioWorkletNode<T>>;
//# sourceMappingURL=/build/es2019/types/audio-worklet-node-renderer-factory.d.ts.map