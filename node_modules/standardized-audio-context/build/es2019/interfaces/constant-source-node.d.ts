import { TContext } from '../types';
import { IAudioParam } from './audio-param';
import { IAudioScheduledSourceNode } from './audio-scheduled-source-node';
export interface IConstantSourceNode<T extends TContext> extends IAudioScheduledSourceNode<T> {
    readonly offset: IAudioParam;
}
//# sourceMappingURL=/build/es2019/interfaces/constant-source-node.d.ts.map