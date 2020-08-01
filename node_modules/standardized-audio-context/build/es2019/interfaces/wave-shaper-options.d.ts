import { TOverSampleType } from '../types';
import { IAudioNodeOptions } from './audio-node-options';
export interface IWaveShaperOptions extends IAudioNodeOptions {
    curve: null | Float32Array;
    oversample: TOverSampleType;
}
//# sourceMappingURL=/build/es2019/interfaces/wave-shaper-options.d.ts.map