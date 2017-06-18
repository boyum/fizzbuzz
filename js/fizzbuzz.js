/* global console */

function fizzbuzz() {
    const n = 100;

    Array.apply(0, Array(n)).map((el, i) => {
        console.log(getFizzOrBuzz(i+1));
    });    
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

// function test() {
//     let output;
//     const n = 100;
//     for (let i = 1; i < n; i++) {
//         if (i % 15 === 0) {
//             output = 'Fizzbuzz';
//         } else if (i % 5 === 0) {
//             output = 'Buzz';
//         } else if (i % 3 === 0) {
//             output = 'Fizz';
//         } else {
//             output = i;
//         }
//         console.log(output);
//     }
// }