function fizzbuzz() {
  const n = 100;

  const fizzBuzzArr = Array.apply(0, Array(n)).map((el, i) => {
    return getFizzOrBuzz(i + 1);
  });

  console.log(fizzBuzzArr);
}

/**
 * Returns 'fizz' if the number is divisable by 3,
 * 'buzz' if the number is divisable by 5,
 * 'fizzbuzz' if dividable by 15,
 * and the number otherwise
 * @param {number} num
 * @return {String|Number}
 */
function getFizzOrBuzz(num) {
  const f = !(num % 3);
  const b = !(num % 5);

  return f | b ? f ? b ? 'Fizzbuzz' : 'Fizz' : 'Buzz' : num;
}

fizzbuzz();

module.exports.getFizzOrBuzz = getFizzOrBuzz;
