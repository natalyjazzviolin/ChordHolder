export const createAddUnrenderedAudioWorkletNode = (getUnrenderedAudioWorkletNodes) => {
    return (nativeContext, audioWorkletNode) => {
        getUnrenderedAudioWorkletNodes(nativeContext).add(audioWorkletNode);
    };
};
//# sourceMappingURL=/build/es2019/factories/add-unrendered-audio-worklet-node.js.map