export const createNativeMediaElementAudioSourceNodeFactory = (createNativeAudioNode) => {
    return (nativeAudioContext, options) => createNativeAudioNode(nativeAudioContext, (ntvDCntxt) => {
        return ntvDCntxt.createMediaElementSource(options.mediaElement);
    });
};
//# sourceMappingURL=/build/es2019/factories/native-media-element-audio-source-node-factory.js.map