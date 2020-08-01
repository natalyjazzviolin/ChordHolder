export const createIsAnyAudioParam = (audioParamStore, isNativeAudioParam) => {
    return (anything) => audioParamStore.has(anything) || isNativeAudioParam(anything);
};
//# sourceMappingURL=/build/es2019/factories/is-any-audio-param.js.map