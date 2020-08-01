export const assignNativeAudioNodeOption = (nativeAudioNode, options, option) => {
    const value = options[option];
    if (value !== undefined && value !== nativeAudioNode[option]) {
        nativeAudioNode[option] = value;
    }
};
//# sourceMappingURL=/build/es2019/helpers/assign-native-audio-node-option.js.map