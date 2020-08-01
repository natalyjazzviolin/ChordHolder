export const createNativeScriptProcessorNodeFactory = (createNativeAudioNode) => {
    return (nativeContext, bufferSize, numberOfInputChannels, numberOfOutputChannels) => {
        return createNativeAudioNode(nativeContext, (ntvCntxt) => {
            return ntvCntxt.createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels);
        });
    };
};
//# sourceMappingURL=/build/es2019/factories/native-script-processor-node-factory.js.map