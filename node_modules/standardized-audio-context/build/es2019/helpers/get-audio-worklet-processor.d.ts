import { IAudioNode, IAudioWorkletProcessor } from '../interfaces';
import { TContext, TNativeOfflineAudioContext } from '../types';
export declare const getAudioWorkletProcessor: <T extends TContext>(nativeOfflineAudioContext: TNativeOfflineAudioContext, proxy: IAudioNode<T>) => Promise<IAudioWorkletProcessor>;
//# sourceMappingURL=/build/es2019/helpers/get-audio-worklet-processor.d.ts.map