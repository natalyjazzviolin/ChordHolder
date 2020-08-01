export const testAudioBufferCopyChannelMethodsOutOfBoundsSupport = (nativeAudioBuffer) => {
    try {
        nativeAudioBuffer.copyToChannel(new Float32Array(1), 0, -1);
    }
    catch {
        return false;
    }
    return true;
};
//# sourceMappingURL=/build/es2019/helpers/test-audio-buffer-copy-channel-methods-out-of-bounds-support.js.map