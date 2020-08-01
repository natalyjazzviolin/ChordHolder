import { IAudioWorkletNodeOptions, IAudioWorkletProcessor, IAudioWorkletProcessorConstructor } from '../interfaces';
import { TNativeAudioWorkletNode, TNativeContext } from '../types';
export declare const createAudioWorkletProcessor: (nativeContext: TNativeContext, nativeAudioWorkletNode: TNativeAudioWorkletNode, processorConstructor: IAudioWorkletProcessorConstructor, audioWorkletNodeOptions: IAudioWorkletNodeOptions) => Promise<IAudioWorkletProcessor>;
//# sourceMappingURL=/build/es2019/helpers/create-audio-worklet-processor.d.ts.map