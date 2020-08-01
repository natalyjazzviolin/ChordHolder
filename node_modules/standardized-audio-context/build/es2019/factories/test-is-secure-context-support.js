export const createTestIsSecureContextSupport = (window) => {
    return () => window !== null && window.hasOwnProperty('isSecureContext');
};
//# sourceMappingURL=/build/es2019/factories/test-is-secure-context-support.js.map