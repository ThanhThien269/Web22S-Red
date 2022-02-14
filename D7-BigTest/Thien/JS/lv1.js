let arr=[7,1,3,4,5,2,8,1];


function test(s){
arr.sort();
console.log(arr)
for (let i = 0; i<arr.length-2;i++){
    let j = i+1;
    let k=arr.length -1;
    while(j<k){
        if (arr[i]+arr[j]+arr[k]==s){
            console.log(arr[i],arr[j],arr[k]);
            break;
        }else if (arr[i]+arr[j]+arr[k] > s){
            k--;
            
        }else{
            j++;
             }
        }
    }
}
test(10);