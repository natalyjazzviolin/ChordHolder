export const isOscillatorNode = (audioNode) => {
    return 'detune' in audioNode && 'frequency' in audioNode;
};
//# sourceMappingURL=/build/es2019/guards/oscillator-node.js.map