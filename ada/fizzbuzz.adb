with Ada.Text_IO; use Ada.Text_IO;

procedure FizzBuzz is
N: Integer := 100;
I: Integer := 1;
begin
    while I <= N loop
        if I mod 15 = 0 then
            Put_Line("FizzBuzz");
        elsif I mod 5 = 0 then
            Put_Line("Buzz");
        elsif I mod 3 = 0 then
            Put_Line("Fizz");
        else
            Put_Line(Integer'Image(I));
        end if; 
        I := I + 1;
    end loop;
end FizzBuzz;