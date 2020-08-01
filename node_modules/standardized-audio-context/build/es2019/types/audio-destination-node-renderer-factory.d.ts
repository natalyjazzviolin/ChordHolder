import { IAudioDestinationNode, IAudioNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TRenderInputsOfAudioNodeFunction } from './render-inputs-of-audio-node-function';
export declare type TAudioDestinationNodeRendererFactory = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>(renderInputsOfAudioNode: TRenderInputsOfAudioNodeFunction) => IAudioNodeRenderer<T, IAudioDestinationNode<T>>;
//# sourceMappingURL=/build/es2019/types/audio-destination-node-renderer-factory.d.ts.map