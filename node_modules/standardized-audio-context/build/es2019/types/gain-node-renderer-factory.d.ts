import { IAudioNodeRenderer, IGainNode, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
export declare type TGainNodeRendererFactory = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>() => IAudioNodeRenderer<T, IGainNode<T>>;
//# sourceMappingURL=/build/es2019/types/gain-node-renderer-factory.d.ts.map