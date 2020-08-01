import { assignNativeAudioNodeOption } from './assign-native-audio-node-option';
export const assignNativeAudioNodeOptions = (nativeAudioNode, options) => {
    assignNativeAudioNodeOption(nativeAudioNode, options, 'channelCount');
    assignNativeAudioNodeOption(nativeAudioNode, options, 'channelCountMode');
    assignNativeAudioNodeOption(nativeAudioNode, options, 'channelInterpretation');
};
//# sourceMappingURL=/build/es2019/helpers/assign-native-audio-node-options.js.map