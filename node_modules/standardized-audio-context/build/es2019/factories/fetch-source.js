export const createFetchSource = (createAbortError) => {
    return async (url) => {
        try {
            const response = await fetch(url);
            if (response.ok) {
                return response.text();
            }
        }
        catch {
            // Ignore errors.
        } // tslint:disable-line:no-empty
        throw createAbortError();
    };
};
//# sourceMappingURL=/build/es2019/factories/fetch-source.js.map