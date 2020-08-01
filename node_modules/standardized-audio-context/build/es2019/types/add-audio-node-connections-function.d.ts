import { IAudioNode, IAudioNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TContext } from './context';
import { TNativeAudioNode } from './native-audio-node';
export declare type TAddAudioNodeConnectionsFunction = <T extends TContext>(audioNode: IAudioNode<T>, audioNodeRenderer: T extends IMinimalOfflineAudioContext | IOfflineAudioContext ? IAudioNodeRenderer<T, IAudioNode<T>> : null, nativeAudioNode: TNativeAudioNode) => void;
//# sourceMappingURL=/build/es2019/types/add-audio-node-connections-function.d.ts.map