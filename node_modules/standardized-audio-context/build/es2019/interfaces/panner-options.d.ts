import { TDistanceModelType, TPanningModelType } from '../types';
import { IAudioNodeOptions } from './audio-node-options';
export interface IPannerOptions extends IAudioNodeOptions {
    coneInnerAngle: number;
    coneOuterAngle: number;
    coneOuterGain: number;
    distanceModel: TDistanceModelType;
    maxDistance: number;
    orientationX: number;
    orientationY: number;
    orientationZ: number;
    panningModel: TPanningModelType;
    positionX: number;
    positionY: number;
    positionZ: number;
    refDistance: number;
    rolloffFactor: number;
}
//# sourceMappingURL=/build/es2019/interfaces/panner-options.d.ts.map