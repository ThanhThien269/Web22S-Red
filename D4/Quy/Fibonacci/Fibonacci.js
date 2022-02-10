function GenerateFibonacci(number){
    let fibonacci = [];
    fibonacci[0] = 1;
    fibonacci[1] = 1;
    for (let i = 2; i < number; i++) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
    }
    let number =0
    let f = GenerateFibonacci(number);
    console.log(f);