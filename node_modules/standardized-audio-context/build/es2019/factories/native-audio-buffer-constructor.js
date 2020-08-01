export const createNativeAudioBufferConstructor = (window) => {
    if (window === null) {
        return null;
    }
    if (window.hasOwnProperty('AudioBuffer')) {
        return window.AudioBuffer;
    }
    return null;
};
//# sourceMappingURL=/build/es2019/factories/native-audio-buffer-constructor.js.map