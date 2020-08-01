export const isGainNode = (audioNode) => {
    return !('frequency' in audioNode) && 'gain' in audioNode;
};
//# sourceMappingURL=/build/es2019/guards/gain-node.js.map