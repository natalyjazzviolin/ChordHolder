import { IMinimalBaseAudioContext } from '../interfaces';
import { TContext } from './context';
import { TNativeContext } from './native-context';
export declare type TMinimalBaseAudioContextConstructor = new <T extends TContext>(nativeContext: TNativeContext, numberOfChannels: number) => IMinimalBaseAudioContext<T>;
//# sourceMappingURL=/build/es2019/types/minimal-base-audio-context-constructor.d.ts.map