function fibo(n) {
    let result = [];
    let n1 = 0,
        n2 = 1,
        temp;
    for (let i = 1; i <= n; i++) {
        temp = n1 + n2;
        n1 = n2;
        n2 = temp;
        result.push(n1);
    }
    return result;
}
console.log(fibo(10));