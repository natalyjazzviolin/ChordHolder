export const isValidLatencyHint = (latencyHint) => {
    return (latencyHint === undefined ||
        typeof latencyHint === 'number' ||
        (typeof latencyHint === 'string' && (latencyHint === 'balanced' || latencyHint === 'interactive' || latencyHint === 'playback')));
};
//# sourceMappingURL=/build/es2019/helpers/is-valid-latency-hint.js.map