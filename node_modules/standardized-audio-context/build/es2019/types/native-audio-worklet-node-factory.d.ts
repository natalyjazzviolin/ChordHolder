import { IAudioWorkletNodeOptions, IAudioWorkletProcessorConstructor } from '../interfaces';
import { TNativeAudioWorkletNode } from './native-audio-worklet-node';
import { TNativeAudioWorkletNodeConstructor } from './native-audio-worklet-node-constructor';
import { TNativeContext } from './native-context';
export declare type TNativeAudioWorkletNodeFactory = (nativeContext: TNativeContext, baseLatency: null | number, nativeAudioWorkletNodeConstructor: null | TNativeAudioWorkletNodeConstructor, name: string, processorConstructor: undefined | IAudioWorkletProcessorConstructor, options: {
    outputChannelCount: number[];
} & IAudioWorkletNodeOptions) => TNativeAudioWorkletNode;
//# sourceMappingURL=/build/es2019/types/native-audio-worklet-node-factory.d.ts.map