import { AUDIO_PARAM_STORE } from '../globals';
import { getValueForKey } from './get-value-for-key';
export const getNativeAudioParam = (audioParam) => {
    return getValueForKey(AUDIO_PARAM_STORE, audioParam);
};
//# sourceMappingURL=/build/es2019/helpers/get-native-audio-param.js.map