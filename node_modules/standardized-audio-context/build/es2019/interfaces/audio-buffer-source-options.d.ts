import { TAnyAudioBuffer } from '../types';
import { IAudioNodeOptions } from './audio-node-options';
export interface IAudioBufferSourceOptions extends IAudioNodeOptions {
    buffer: null | TAnyAudioBuffer;
    loop: boolean;
    loopEnd: number;
    loopStart: number;
    playbackRate: number;
}
//# sourceMappingURL=/build/es2019/interfaces/audio-buffer-source-options.d.ts.map