export const createGetUnrenderedAudioWorkletNodes = (unrenderedAudioWorkletNodeStore) => {
    return (nativeContext) => {
        const unrenderedAudioWorkletNodes = unrenderedAudioWorkletNodeStore.get(nativeContext);
        if (unrenderedAudioWorkletNodes === undefined) {
            throw new Error('The context has no set of AudioWorkletNodes.');
        }
        return unrenderedAudioWorkletNodes;
    };
};
//# sourceMappingURL=/build/es2019/factories/get-unrendered-audio-worklet-nodes.js.map