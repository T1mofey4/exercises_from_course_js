
const multiply20 = (price) => price * 20,
      divide100 = (price) => price / 100,
      normalizePrice = (price) => price.toFixed(2);

const compose = (...fns) => (x) => fns.reduceRight((res, fn) => fn(res), x);

console.log(compose(multiply20, divide100, normalizePrice)(200));





const add1 = function(a) {return a + 1},
      addA113 = function(a, b, c){return a + b + c};

const composeWithArgs = (...fns) => fns.reduceRight((f, g) => (...args) => g(f(...args)));

console.log(composeWithArgs(add1, addA113)(1, 2, 3));

