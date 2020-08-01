export const createTestAudioContextOptionsSupport = (nativeAudioContextConstructor) => {
    return () => {
        if (nativeAudioContextConstructor === null) {
            return false;
        }
        let audioContext;
        try {
            audioContext = new nativeAudioContextConstructor({ latencyHint: 'balanced' });
        }
        catch {
            return false;
        }
        audioContext.close();
        return true;
    };
};
//# sourceMappingURL=/build/es2019/factories/test-audio-context-options-support.js.map