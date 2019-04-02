function fizzbuzz() {
  const n = 100;

  const fizzBuzzArr = Array
    .apply(0, new Array(n))
    .map((el, i) => getFizzOrBuzz(i + 1));

  console.log(fizzBuzzArr);
}

/**
 * Returns 'fizz' if the number is divisable by 3,
 * 'buzz' if the number is divisable by 5,
 * 'fizzbuzz' if divisable by 15,
 * and the number otherwise
 * @param {number} num number to check
 * @return {string|number} 'fizz' if num is divisable by 3, 'buzz' if num is divisable by 5, 'fizzbuzz' if num is divisable by 15, or num's value
 */
function getFizzOrBuzz(num) {
  const f = !(num % 3);
  const b = !(num % 5);

  return f | b ? f ? b ? 'Fizzbuzz' : 'Fizz' : 'Buzz' : num;
}

fizzbuzz();

module.exports.getFizzOrBuzz = getFizzOrBuzz;
