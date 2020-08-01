import { IAudioBufferSourceNode } from './audio-buffer-source-node';
import { IAudioNodeRenderer } from './audio-node-renderer';
import { IMinimalOfflineAudioContext } from './minimal-offline-audio-context';
import { IOfflineAudioContext } from './offline-audio-context';
export interface IAudioBufferSourceNodeRenderer<T extends IMinimalOfflineAudioContext | IOfflineAudioContext> extends IAudioNodeRenderer<T, IAudioBufferSourceNode<T>> {
    start: [number, number] | [number, number, number];
    stop: number;
}
//# sourceMappingURL=/build/es2019/interfaces/audio-buffer-source-node-renderer.d.ts.map