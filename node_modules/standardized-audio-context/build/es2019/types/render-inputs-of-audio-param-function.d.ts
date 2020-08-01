import { IAudioNode, IAudioParam, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TNativeAudioParam } from './native-audio-param';
import { TNativeOfflineAudioContext } from './native-offline-audio-context';
export declare type TRenderInputsOfAudioParamFunction = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>(audioParam: IAudioParam, nativeOfflineAudioContext: TNativeOfflineAudioContext, nativeAudioParam: TNativeAudioParam, trace: readonly IAudioNode<T>[]) => Promise<void>;
//# sourceMappingURL=/build/es2019/types/render-inputs-of-audio-param-function.d.ts.map