import { TAnyAudioBuffer, TContext } from '../types';
import { IAudioNode } from './audio-node';
export interface IConvolverNode<T extends TContext> extends IAudioNode<T> {
    buffer: null | TAnyAudioBuffer;
    normalize: boolean;
}
//# sourceMappingURL=/build/es2019/interfaces/convolver-node.d.ts.map