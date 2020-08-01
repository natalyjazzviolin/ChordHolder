import { IConstantSourceNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TContext } from './context';
export declare type TConstantSourceNodeRenderer<T extends TContext> = T extends IMinimalOfflineAudioContext | IOfflineAudioContext ? IConstantSourceNodeRenderer<T> : null;
//# sourceMappingURL=/build/es2019/types/constant-source-node-renderer.d.ts.map