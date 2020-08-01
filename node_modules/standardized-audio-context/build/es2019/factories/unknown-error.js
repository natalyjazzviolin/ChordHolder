export const createUnknownError = () => {
    try {
        return new DOMException('', 'UnknownError');
    }
    catch (err) {
        // Bug #122: Edge is the only browser that does not yet allow to construct a DOMException.
        err.name = 'UnknownError';
        return err;
    }
};
//# sourceMappingURL=/build/es2019/factories/unknown-error.js.map