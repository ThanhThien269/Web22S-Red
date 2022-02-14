const numbers= document.getElementsByClassName("num");
const result = document.getElementById("resul");
for (let number of numbers){
    numbers.addEventListener("click",function()
    {
        result.innerHTML += this.value;
    });
}
function equal(){
    let res = result.innerHTML;
    let output = eval(res);
    result.innerHTML= output;
}
function clean(){
    result.innerHTML=" ";

}
