import { TNativeAudioNode } from '../types';
export declare const interceptConnections: <T extends object>(original: T, interceptor: TNativeAudioNode) => T & {
    connect: TNativeAudioNode['connect'];
    disconnect: TNativeAudioNode['disconnect'];
};
//# sourceMappingURL=/build/es2019/helpers/intercept-connections.d.ts.map