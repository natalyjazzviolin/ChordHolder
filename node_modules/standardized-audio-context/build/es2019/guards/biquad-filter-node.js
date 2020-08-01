export const isBiquadFilterNode = (audioNode) => {
    return 'frequency' in audioNode && 'gain' in audioNode;
};
//# sourceMappingURL=/build/es2019/guards/biquad-filter-node.js.map