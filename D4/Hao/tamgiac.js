function tamGiac(a,b,c){
    if (((a + b > c)|| (a + c > b) ||(b + c > a)) && (a > 0) && (b > 0) && (c > 0)) {
            if ((a == b) && (b == c)) {
                console.log("Tam giác đều!");
            } else if ((a == b) || (a == c) || (b == c)) {
                console.log("Tam giác cân!");
            } else if ((a * a == b * b + c * c) ||
                    (b * b == a * a + c * c) ||
                    (c * c == a * a + b * b)) {
                console.log("Tam giác vuông!");
            } else  {
                console.log("Tam giác thường!");
            }
        } else {
            console.log("3 cạnh của tam giác không thỏa mãn điều kiện lập thành tam giác!");
        }
}
tamGiac(1,1,3);