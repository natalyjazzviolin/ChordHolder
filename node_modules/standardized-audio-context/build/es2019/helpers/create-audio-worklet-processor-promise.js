import { cloneAudioWorkletNodeOptions } from './clone-audio-worklet-node-options';
export const createAudioWorkletProcessorPromise = async (processorConstructor, audioWorkletNodeOptions) => {
    const clonedAudioWorkletNodeOptions = await cloneAudioWorkletNodeOptions(audioWorkletNodeOptions);
    return new processorConstructor(clonedAudioWorkletNodeOptions);
};
//# sourceMappingURL=/build/es2019/helpers/create-audio-worklet-processor-promise.js.map