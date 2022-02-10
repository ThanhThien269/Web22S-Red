function calender(nam,thang){
    while(true){
        while(!(nam)>0)
		{
            console.log("Vui lòng nhập lại");
        }
        while(!(thang>0 && thang<13))
		{
			console.log("Vui lòng nhập lại");
            break;
		}
        switch(thang)
		{
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
				console.log("Tháng có 31 ngày");
				break;
            case 4:
            case 6:
            case 9:
            case 11: 
                console.log("Tháng có 30 ngày")
			case 2:
				if(nam%4 == 0 || nam%400 == 0)
				{
					console.log("Có 29 ngày");
				}
				else
				{
					console.log("Có 28 ngày");
				}
				break;
			default:
		}
        break;
    }
}
calender(2014,2);