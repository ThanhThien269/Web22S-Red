function nam(nam) {
    while (true) {
        while (!(nam > 0)) {
            console.log("Vui long nhap lai!");
            break;
        }
        let thang = 2;
        while (!(thang > 0 && thang < 13)) {
            console.log("Vui long nhap lai!");
            break;
        }
        switch (thang) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                console.log("thang co 31 ngay");
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                console.log("thang co 30 ngay");
                break;
            case 2:
                if (nam % 4 == 0 && nam % 400 == 0) {
                    console.log("Co 29 ngay - Nam nhuan");
                } else {
                    console.log("Co 28 ngay - Nam khong nhuan");
                }
                break;
            default:
        }
        break;
    }
}
nam(2100);