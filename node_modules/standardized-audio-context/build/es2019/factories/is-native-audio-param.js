export const createIsNativeAudioParam = (window) => {
    return (anything) => {
        return window !== null && typeof window.AudioParam === 'function' && anything instanceof window.AudioParam;
    };
};
//# sourceMappingURL=/build/es2019/factories/is-native-audio-param.js.map