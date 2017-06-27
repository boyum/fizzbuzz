#include "fizzbuzz.hpp"

using namespace std;

string FizzBuzz::getFizzOrBuzz(int number) 
{
    string s = to_string(number);
    if (number % 3 == 0) {
        s = "fizz";
    }
    else if (number % 5 == 0) {
        s = "buzz";
    }
    else if (number % 15 == 0) {
        s = "fizzbuzz";
    }
    
    return s;
};