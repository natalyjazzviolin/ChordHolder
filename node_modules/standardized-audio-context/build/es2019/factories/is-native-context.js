export const createIsNativeContext = (isNativeAudioContext, isNativeOfflineAudioContext) => {
    return (anything) => {
        return isNativeAudioContext(anything) || isNativeOfflineAudioContext(anything);
    };
};
//# sourceMappingURL=/build/es2019/factories/is-native-context.js.map