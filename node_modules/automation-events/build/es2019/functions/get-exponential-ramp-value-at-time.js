export const getExponentialRampValueAtTime = (time, startTime, valueAtStartTime, { endTime, value }) => {
    if (valueAtStartTime === value) {
        return value;
    }
    if ((0 < valueAtStartTime && 0 < value) || (valueAtStartTime < 0 && value < 0)) {
        return valueAtStartTime * (value / valueAtStartTime) ** ((time - startTime) / (endTime - startTime));
    }
    return 0;
};
//# sourceMappingURL=/build/es2019/functions/get-exponential-ramp-value-at-time.js.map