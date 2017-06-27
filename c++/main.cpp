#include <iostream>
#include <string>
#include "fizzbuzz.cpp"

using namespace std;

int main() {
    int n = 100;
    int i = 0;

    for (; i <= n; ++i) {
        cout << FizzBuzz::getFizzOrBuzz(i) << endl;
    }

    return 0;
}