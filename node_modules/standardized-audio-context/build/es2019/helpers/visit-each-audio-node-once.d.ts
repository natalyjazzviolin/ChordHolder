import { IAudioNode } from '../interfaces';
import { TContext } from '../types';
export declare const visitEachAudioNodeOnce: <T extends TContext>(cycles: IAudioNode<T>[][], visitor: (audioNode: IAudioNode<T>, count: number) => void) => void;
//# sourceMappingURL=/build/es2019/helpers/visit-each-audio-node-once.d.ts.map