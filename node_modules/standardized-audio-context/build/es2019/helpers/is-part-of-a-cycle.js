import { CYCLE_COUNTERS } from '../globals';
export const isPartOfACycle = (audioNode) => {
    return CYCLE_COUNTERS.has(audioNode);
};
//# sourceMappingURL=/build/es2019/helpers/is-part-of-a-cycle.js.map