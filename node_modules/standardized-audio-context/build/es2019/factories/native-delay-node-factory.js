import { assignNativeAudioNodeAudioParamValue } from '../helpers/assign-native-audio-node-audio-param-value';
import { assignNativeAudioNodeOptions } from '../helpers/assign-native-audio-node-options';
export const createNativeDelayNodeFactory = (createNativeAudioNode) => {
    return (nativeContext, options) => {
        const nativeDelayNode = createNativeAudioNode(nativeContext, (ntvCntxt) => ntvCntxt.createDelay(options.maxDelayTime));
        assignNativeAudioNodeOptions(nativeDelayNode, options);
        assignNativeAudioNodeAudioParamValue(nativeDelayNode, options, 'delayTime');
        return nativeDelayNode;
    };
};
//# sourceMappingURL=/build/es2019/factories/native-delay-node-factory.js.map