function tamGiac(a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
        if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b) {
            console.log("Day la tam giac vuong");
        } else if (a == b && b == c) {
            console.log("Day la tam giac deu");
        } else if (a == b || a == c || b == c) {
            console.log("Day la tam giac can");
        } else if (a * a > b * b + c * c || b * b > a * a + c * c || c * c > a * a + b * b) {
            console.log("Day la tam giac tu");
        } else {
            console.log("Day la tam giac nhon");
        }
    } else {
        console.log("Ba canh a, b, c khong phai la ba canh cua mot tam giac");
    }
    return;
}
tamGiac(3, 2, 1);