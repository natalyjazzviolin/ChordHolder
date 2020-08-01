export const createConvertNumberToUnsignedLong = (unit32Array) => {
    return (value) => {
        unit32Array[0] = value;
        return unit32Array[0];
    };
};
//# sourceMappingURL=/build/es2019/factories/convert-number-to-unsigned-long.js.map