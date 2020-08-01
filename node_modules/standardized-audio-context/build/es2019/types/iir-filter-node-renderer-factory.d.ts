import { IAudioNodeRenderer, IIIRFilterNode, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TTypedArray } from './typed-array';
export declare type TIIRFilterNodeRendererFactory = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>(feedback: number[] | TTypedArray, feedforward: number[] | TTypedArray) => IAudioNodeRenderer<T, IIIRFilterNode<T>>;
//# sourceMappingURL=/build/es2019/types/iir-filter-node-renderer-factory.d.ts.map