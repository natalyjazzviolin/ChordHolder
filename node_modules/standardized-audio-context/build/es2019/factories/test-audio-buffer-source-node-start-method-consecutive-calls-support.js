export const createTestAudioBufferSourceNodeStartMethodConsecutiveCallsSupport = (createNativeAudioNode) => {
    return (nativeContext) => {
        const nativeAudioBufferSourceNode = createNativeAudioNode(nativeContext, (ntvCntxt) => ntvCntxt.createBufferSource());
        nativeAudioBufferSourceNode.start();
        try {
            nativeAudioBufferSourceNode.start();
        }
        catch {
            return true;
        }
        return false;
    };
};
//# sourceMappingURL=/build/es2019/factories/test-audio-buffer-source-node-start-method-consecutive-calls-support.js.map