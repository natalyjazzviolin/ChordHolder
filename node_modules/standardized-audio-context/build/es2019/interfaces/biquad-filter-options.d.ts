import { TBiquadFilterType } from '../types';
import { IAudioNodeOptions } from './audio-node-options';
export interface IBiquadFilterOptions extends IAudioNodeOptions {
    detune: number;
    frequency: number;
    gain: number;
    Q: number;
    type: TBiquadFilterType;
}
//# sourceMappingURL=/build/es2019/interfaces/biquad-filter-options.d.ts.map