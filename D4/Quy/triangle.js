function triangle(a, b, c){
    if(a == 0 || b==0 || c==0){
        console.log("Không phải tam giác");
    }else if((a==b)&&(b==c)){
        console.log("Đây là tam giác đều");
    }else if ((a==b)||(b==c)||(c==a)){
        console.log(" Đây là tam giác cân");
    }else if((a*a==b*b+c*c)||(b*b==a*a*+c*c)||(c*c==a*a+b*b)){
        console.log("Đây là tam giác vuông");
    }else {
        console.log("Tam giác thường")
    }
}
triangle(3,2,1);