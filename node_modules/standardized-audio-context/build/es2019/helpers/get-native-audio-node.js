import { AUDIO_NODE_STORE } from '../globals';
import { getValueForKey } from './get-value-for-key';
export const getNativeAudioNode = (audioNode) => {
    return getValueForKey(AUDIO_NODE_STORE, audioNode);
};
//# sourceMappingURL=/build/es2019/helpers/get-native-audio-node.js.map