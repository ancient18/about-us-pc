// 防抖

export default (fn, time) => {
  let timer;
  return function () {
    if (timer) return;
    fn(...arguments);
    timer = setTimeout(() => {
      timer = null;
    }, time);
  };
};
