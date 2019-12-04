open System

let numbers = [| for i in 1 .. 100 ->  i |]
let isFizz number = number % 3 = 0
let isBuzz number = number % 5 = 0

let fizzorbuzz number = 
  if isFizz number && isBuzz number 
  then Console.WriteLine "FizzBuzz" 
  else 
  (
    if isFizz number 
    then Console.WriteLine "Fizz" 
    else 
    (
      if isBuzz number 
      then Console.WriteLine "Buzz" 
      else Console.WriteLine (string number)
    )
  )

let fizzbuzz numbers = Array.iter fizzorbuzz numbers

fizzbuzz numbers
