export const getLinearRampValueAtTime = (time, startTime, valueAtStartTime, { endTime, value }) => {
    return valueAtStartTime + ((time - startTime) / (endTime - startTime)) * (value - valueAtStartTime);
};
//# sourceMappingURL=/build/es2019/functions/get-linear-ramp-value-at-time.js.map