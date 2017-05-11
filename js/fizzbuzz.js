/* global console */

(function fizzbuzz() {
    const n = 100;
    let f;
    let b;
    let fb;

    Array.apply(0, Array(n)).map((el, i) => {
        i++;
        f = !(i % 3);
        b = !(i % 5);

        console.log(f | b ? f ? b ? 'Fizzbuzz' : 'Fizz' : 'Buzz' : i);
    });
})();

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