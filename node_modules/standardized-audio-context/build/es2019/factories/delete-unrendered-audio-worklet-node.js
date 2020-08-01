export const createDeleteUnrenderedAudioWorkletNode = (getUnrenderedAudioWorkletNodes) => {
    return (nativeContext, audioWorkletNode) => {
        getUnrenderedAudioWorkletNodes(nativeContext).delete(audioWorkletNode);
    };
};
//# sourceMappingURL=/build/es2019/factories/delete-unrendered-audio-worklet-node.js.map