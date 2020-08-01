import { getEventListenersOfAudioNode } from './get-event-listeners-of-audio-node';
export const deleteEventListenerOfAudioNode = (audioNode, eventListener) => {
    const eventListeners = getEventListenersOfAudioNode(audioNode);
    if (!eventListeners.delete(eventListener)) {
        throw new Error('Missing the expected event listener.');
    }
};
//# sourceMappingURL=/build/es2019/helpers/delete-event-listeners-of-audio-node.js.map