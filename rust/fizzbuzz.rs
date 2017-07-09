fn main() {
    const N: i8 = 100;
    
    for i in 1..N {
        println!("{}", fizzbuzz(i).to_string());
    }
}

fn fizzbuzz(i: i8) -> String {
    let return_val =
        if i % 15 == 0 { format!("fizzbuzz") }
        else if i % 5 == 0 { format!("buzz") }
        else if i % 3 == 0 { format!("fizz") }
        else { i.to_string() };
    
    return_val
}