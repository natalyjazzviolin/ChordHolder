export const createIsNativeAudioNode = (window) => {
    return (anything) => {
        return window !== null && typeof window.AudioNode === 'function' && anything instanceof window.AudioNode;
    };
};
//# sourceMappingURL=/build/es2019/factories/is-native-audio-node.js.map