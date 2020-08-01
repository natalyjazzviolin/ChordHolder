import { IAudioBufferSourceNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TContext } from './context';
export declare type TAudioBufferSourceNodeRenderer<T extends TContext> = T extends IMinimalOfflineAudioContext | IOfflineAudioContext ? IAudioBufferSourceNodeRenderer<T> : null;
//# sourceMappingURL=/build/es2019/types/audio-buffer-source-node-renderer.d.ts.map