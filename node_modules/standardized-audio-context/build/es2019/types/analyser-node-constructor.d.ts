import { IAnalyserNode, IAnalyserOptions } from '../interfaces';
import { TContext } from './context';
export declare type TAnalyserNodeConstructor = new <T extends TContext>(context: T, options?: Partial<IAnalyserOptions>) => IAnalyserNode<T>;
//# sourceMappingURL=/build/es2019/types/analyser-node-constructor.d.ts.map