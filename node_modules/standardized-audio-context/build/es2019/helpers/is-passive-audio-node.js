import { ACTIVE_AUDIO_NODE_STORE } from '../globals';
export const isPassiveAudioNode = (audioNode) => {
    return !ACTIVE_AUDIO_NODE_STORE.has(audioNode);
};
//# sourceMappingURL=/build/es2019/helpers/is-passive-audio-node.js.map