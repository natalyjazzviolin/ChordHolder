import { IAudioParamDescriptor } from './audio-param-descriptor';
import { IAudioWorkletNodeOptions } from './audio-worklet-node-options';
import { IAudioWorkletProcessor } from './audio-worklet-processor';
export interface IAudioWorkletProcessorConstructor {
    parameterDescriptors?: IAudioParamDescriptor[];
    new (options: IAudioWorkletNodeOptions): IAudioWorkletProcessor;
}
//# sourceMappingURL=/build/es2019/interfaces/audio-worklet-processor-constructor.d.ts.map