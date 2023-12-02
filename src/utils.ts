export type RequestTimeout = { value: number };
/**
 * Behaves the same as setTimeout except uses requestAnimationFrame() where possible for better performance
 * @param {function} fn The callback function
 * @param {int} delay The delay in milliseconds
 */
export const requestTimeout = (fn, delay: number): RequestTimeout => {
  const start = new Date().getTime();

  const handle: RequestTimeout = { value: 0 };

  function loop(): void {
    const current = new Date().getTime();

    const delta = current - start;

    if (delta >= delay) {
      return fn.call(null);
    }
    handle.value = window.requestAnimationFrame(loop);
  }

  handle.value = window.requestAnimationFrame(loop);
  return handle;
};

/**
 * Behaves the same as clearTimeout except uses cancelRequestAnimationFrame() where possible for better performance
 * @param {int|object} fn The callback function
 */
export const clearRequestTimeout = (handle): void =>
  window.cancelAnimationFrame(handle.value);
