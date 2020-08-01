export const detachArrayBuffer = (arrayBuffer) => {
    const { port1 } = new MessageChannel();
    port1.postMessage(arrayBuffer, [arrayBuffer]);
};
//# sourceMappingURL=/build/es2019/helpers/detach-array-buffer.js.map