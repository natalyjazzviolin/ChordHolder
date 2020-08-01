import { TContext, TOverSampleType } from '../types';
import { IAudioNode } from './audio-node';
export interface IWaveShaperNode<T extends TContext> extends IAudioNode<T> {
    curve: null | Float32Array;
    oversample: TOverSampleType;
}
//# sourceMappingURL=/build/es2019/interfaces/wave-shaper-node.d.ts.map