import { EVENT_LISTENERS } from '../globals';
import { getValueForKey } from './get-value-for-key';
export const getEventListenersOfAudioNode = (audioNode) => {
    return getValueForKey(EVENT_LISTENERS, audioNode);
};
//# sourceMappingURL=/build/es2019/helpers/get-event-listeners-of-audio-node.js.map