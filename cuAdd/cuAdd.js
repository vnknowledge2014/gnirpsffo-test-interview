const add = (a, b, c) => a + b + c;

const cu = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...argsNext) {
        return curried.apply(this, args.concat(argsNext));
      };
    }
  };
};

let cuAdd = cu(add);

module.exports = cuAdd;
