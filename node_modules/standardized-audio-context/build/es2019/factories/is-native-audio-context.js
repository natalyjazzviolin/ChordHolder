export const createIsNativeAudioContext = (nativeAudioContextConstructor) => {
    return (anything) => {
        return nativeAudioContextConstructor !== null && anything instanceof nativeAudioContextConstructor;
    };
};
//# sourceMappingURL=/build/es2019/factories/is-native-audio-context.js.map