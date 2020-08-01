import { IAudioNode, IAudioNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TContext } from './context';
export declare type TAudioNodeRenderer<T extends TContext, U extends IAudioNode<T> = IAudioNode<T>> = T extends IMinimalOfflineAudioContext | IOfflineAudioContext ? IAudioNodeRenderer<T, U> : null;
//# sourceMappingURL=/build/es2019/types/audio-node-renderer.d.ts.map