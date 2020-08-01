import { IAudioListener } from '../interfaces';
import { TContext } from './context';
import { TNativeContext } from './native-context';
export declare type TAudioListenerFactory = <T extends TContext>(context: T, nativeContext: TNativeContext) => IAudioListener;
//# sourceMappingURL=/build/es2019/types/audio-listener-factory.d.ts.map