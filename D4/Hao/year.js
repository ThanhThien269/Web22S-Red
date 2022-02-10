// function tinhNam(n){
//     let soNamDL = n%19;
//     console.log(soNamDL)
//     switch(soNamDL)
//         {
//             case 0: 
//                 console.log("Đây là năm nhuận");
//                 break;
//             case 3:
//                 console.log("Đây là năm nhuận");
//                 break;
//             case 6: 
//                 console.log("Đây là năm nhuận");
//                 break;
//             case 9:
//                 console.log("Đây là năm nhuận");
//                 break;
//             case 11: 
//                 console.log("Đây là năm nhuận");
//                 break;
//             case 14:
//                 console.log("Đây là năm nhuận");
//                 break;
//             case 17:
//                 console.log("Đây là năm nhuận");
//                 break;
//             default:
//             console.log("Không phải là năm nhuận");
//         }
// }
// tinhNam(2018);
 function tinhNam(year){
    if ((year % 4===0 &&year%100 !==0 && year % 400 !==0)||(year%100===0 && year % 400===0)){
   console.log( year + " la nam nhuan.");
    } else{
        console.log( year + " ko la nam nhuan.");
    }
    };
tinhNam(2500);
 