
// function check(n)
// {
// // let time=Date.now();
// for(let i = 2;i*i<n;i++){
//     if(n%i==0){
//         return false;
//         }
//     }
// return true;

//  }

// console.log(check(5))
let arr=[];

function test(n){
    for(let i = 0;i<n;i++){
        arr.push(true);
    }
for(let i = 2;i<n;i++){
    if(arr[i])
    {
        console.log(i);
        let j = 2;
        let p = i*j;
        while(p<n){
            arr[p]=false;
            j++;
            p=i*j;
        }
    }
}
}

let time = Date.now();
test(10000);
let elapsed = Date.now()-time;
console.log(elapsed+"ms");