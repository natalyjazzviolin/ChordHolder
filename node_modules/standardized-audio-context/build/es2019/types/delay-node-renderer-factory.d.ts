import { IAudioNodeRenderer, IDelayNode, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
export declare type TDelayNodeRendererFactory = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>(maxDelayTime: number) => IAudioNodeRenderer<T, IDelayNode<T>>;
//# sourceMappingURL=/build/es2019/types/delay-node-renderer-factory.d.ts.map