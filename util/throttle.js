// 节流

export default (fn, time) => {
  let timer;
  return function () {
    if (timer) return;
    console.log("scroll");
    fn(...arguments);
    timer = setTimeout(() => {
      timer = null;
    }, time);
  };
};
