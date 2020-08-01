export const getTargetValueAtTime = (time, valueAtStartTime, { startTime, target, timeConstant }) => {
    return target + (valueAtStartTime - target) * Math.exp((startTime - time) / timeConstant);
};
//# sourceMappingURL=/build/es2019/functions/get-target-value-at-time.js.map