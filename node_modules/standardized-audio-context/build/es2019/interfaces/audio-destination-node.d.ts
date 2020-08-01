import { TContext } from '../types';
import { IAudioNode } from './audio-node';
export interface IAudioDestinationNode<T extends TContext> extends IAudioNode<T> {
    readonly maxChannelCount: number;
}
//# sourceMappingURL=/build/es2019/interfaces/audio-destination-node.d.ts.map