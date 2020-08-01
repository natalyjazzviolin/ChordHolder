import { IAudioNode, IAudioParam } from '../interfaces';
import { TContext } from '../types';
export declare const isAudioNode: <T extends TContext>(audioNodeOrAudioParam: IAudioParam | IAudioNode<T>) => audioNodeOrAudioParam is IAudioNode<T>;
//# sourceMappingURL=/build/es2019/guards/audio-node.d.ts.map