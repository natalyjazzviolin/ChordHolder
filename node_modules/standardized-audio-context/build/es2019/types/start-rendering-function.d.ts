import { IAudioDestinationNode, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TNativeAudioBuffer } from './native-audio-buffer';
import { TNativeOfflineAudioContext } from './native-offline-audio-context';
export declare type TStartRenderingFunction = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>(destination: IAudioDestinationNode<T>, nativeOfflineAudioContext: TNativeOfflineAudioContext) => Promise<TNativeAudioBuffer>;
//# sourceMappingURL=/build/es2019/types/start-rendering-function.d.ts.map