package no.sindreboyum.fizzbuzz;

public class FizzBuzz {
    public static void main(String args[]) {
        

        int i = 1;
        int n = 100;
        String result = "";

        boolean b;
        boolean f;

        for (; i <= n; i++, result = "") {
            b = i % 3 == 0;
            f = i % 5 == 0;

            result += b ? "fizz" : "";
            result += f ? "buzz" : "";

            if (!(b && f)) {
                result += i;
            }

            System.out.println(result);
        }
    }
}