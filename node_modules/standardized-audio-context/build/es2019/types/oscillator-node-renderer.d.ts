import { IMinimalOfflineAudioContext, IOfflineAudioContext, IOscillatorNodeRenderer } from '../interfaces';
import { TContext } from './context';
export declare type TOscillatorNodeRenderer<T extends TContext> = T extends IMinimalOfflineAudioContext | IOfflineAudioContext ? IOscillatorNodeRenderer<T> : null;
//# sourceMappingURL=/build/es2019/types/oscillator-node-renderer.d.ts.map