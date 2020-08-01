import { IAudioNode, IAudioParam } from '../interfaces';
import { TContext } from './context';
export declare type TDetectCyclesFunction = <T extends TContext>(chain: IAudioNode<T>[], nextLink: IAudioNode<T> | IAudioParam) => IAudioNode<T>[][];
//# sourceMappingURL=/build/es2019/types/detect-cycles-function.d.ts.map