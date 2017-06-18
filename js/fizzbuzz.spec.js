import test from 'ava';

import { getFizzOrBuzz } from './fizzbuzz';

test('return \'Fizz\' if divisable by 3', t => {
    t.deepEqual(getFizzOrBuzz(36), 'Fizz');
});

test('return \'Buzz\' if divisable by 5', t => {
    t.deepEqual(getFizzOrBuzz(20), 'Buzz');
});

test('return \'Fizzbuzz\' if divisable by 15', t => {
    t.deepEqual(getFizzOrBuzz(30), 'Fizzbuzz');
});

test('return the given number if not divisable by 3 or 5', t => {
    t.deepEqual(getFizzOrBuzz(17), 17);
});