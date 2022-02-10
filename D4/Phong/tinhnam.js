function tinhNam(n) {
    let soNamDl = n % 19;
    console.log(soNamDl);
    switch (soNamDl) {
        case 0:
            console.log("Đây là năm nhuận!");
            break;
        case 3:
            console.log("Đây là năm nhuận!");
            break;
        case 6:
            console.log("Đây là năm nhuận!");
            break;
        case 9:
            console.log("Đây là năm nhuận!");
            break;
        case 11:
            console.log("Đây là năm nhuận!");
            break;
        case 14:
            console.log("Đây là năm nhuận!");
            break;
        case 17:
            console.log("Đây là năm nhuận!");
            break;

        default:
            console.log("Không phải là năm nhuận!");
    }

}
tinhNam(2022);