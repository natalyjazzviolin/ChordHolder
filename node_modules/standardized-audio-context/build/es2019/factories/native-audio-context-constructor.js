export const createNativeAudioContextConstructor = (window) => {
    if (window === null) {
        return null;
    }
    if (window.hasOwnProperty('AudioContext')) {
        return window.AudioContext;
    }
    return window.hasOwnProperty('webkitAudioContext') ? window.webkitAudioContext : null;
};
//# sourceMappingURL=/build/es2019/factories/native-audio-context-constructor.js.map