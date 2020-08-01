import { TContext } from '../types';
import { IAudioNode } from './audio-node';
import { IAudioParam } from './audio-param';
export interface IDelayNode<T extends TContext> extends IAudioNode<T> {
    readonly delayTime: IAudioParam;
}
//# sourceMappingURL=/build/es2019/interfaces/delay-node.d.ts.map