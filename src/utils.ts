declare interface Handle {
  value: number | void;
}

export type RequestTimeout = Record<string, unknown> | number | void | Handle;
/**
 * Behaves the same as setTimeout except uses requestAnimationFrame() where possible for better performance
 * @param {function} fn The callback function
 * @param {int} delay The delay in milliseconds
 */
export const requestTimeout = (fn, delay: number): RequestTimeout => {
  const start = new Date().getTime();

  const handle: Handle = { value: 0 };

  function loop(): number | void {
    const current = new Date().getTime();

    const delta = current - start;

    if (delta >= delay) {
      fn.call(null);
    } else {
      handle.value = window.requestAnimationFrame(loop);
    }
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
