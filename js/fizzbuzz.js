function fizzbuzz() {
  const n = 100;

  const fizzBuzzArray = new Array(n)
    .fill(0)
    .map((_, i) => [i + 1, getFizzOrBuzz(i + 1)]);

  console.table(fizzBuzzArray);
}

/**
 * Returns 'fizz' if the number is divisable by 3,
 * 'buzz' if the number is divisable by 5,
 * 'fizzbuzz' if divisable by 15,
 * and the number otherwise
 * @param {number} number number to check
 * @return {string|number} 'fizz' if num is divisable by 3, 'buzz' if num is divisable by 5, 'fizzbuzz' if num is divisable by 15, or num's value
 */
function getFizzOrBuzz(number) {
  const f = !(number % 3);
  const b = !(number % 5);

  // eslint-disable-next-line unicorn/no-nested-ternary
  return f | b ? f ? b ? 'Fizzbuzz' : 'Fizz' : 'Buzz' : number;
}

fizzbuzz();

module.exports.getFizzOrBuzz = getFizzOrBuzz;
