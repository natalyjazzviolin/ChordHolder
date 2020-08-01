import { isAudioNode } from './audio-node';
export const isAudioNodeOutputConnection = (outputConnection) => {
    return isAudioNode(outputConnection[0]);
};
//# sourceMappingURL=/build/es2019/guards/audio-node-output-connection.js.map