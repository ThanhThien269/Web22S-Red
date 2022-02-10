let n1 = 0,
    n2 = 1,
    temp;

function fibo(n) {
    for (let i = 1; i <= n; i++) {
        console.log(n1);
        temp = n1 + n2;
        n1 = n2;
        n2 = temp;
    }
}

fibo(10);