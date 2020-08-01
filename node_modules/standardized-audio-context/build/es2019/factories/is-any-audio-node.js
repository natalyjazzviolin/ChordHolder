export const createIsAnyAudioNode = (audioNodeStore, isNativeAudioNode) => {
    return (anything) => audioNodeStore.has(anything) || isNativeAudioNode(anything);
};
//# sourceMappingURL=/build/es2019/factories/is-any-audio-node.js.map