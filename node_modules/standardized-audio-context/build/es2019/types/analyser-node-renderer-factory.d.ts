import { IAnalyserNode, IAudioNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
export declare type TAnalyserNodeRendererFactory = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>() => IAudioNodeRenderer<T, IAnalyserNode<T>>;
//# sourceMappingURL=/build/es2019/types/analyser-node-renderer-factory.d.ts.map