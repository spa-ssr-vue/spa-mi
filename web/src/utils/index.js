export * from "./storage";

export function throttle(fn = () => {}, delay = 0, immediate = false) {
  let timer = 0;

  return function() {
    const args = arguments;
    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      clearTimeout(timer);
      fn.apply(this, args);
    }, delay);
  };
}

export function debounce(fn, delay, immediate) {
  let timer = 0;
  return function() {
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

export function isShow(el) {
  const height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  const rect = el.getBoundingClientRect(); // 替代 offset
  return rect.top <= height;
}

export function isShowX(el) {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const rect = el.getBoundingClientRect();
  return rect.left <= width;
}
