import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-girls',
  templateUrl: './list-girls.component.html',
  styleUrls: ['./list-girls.component.scss']
})
export class ListGirlsComponent implements OnInit {
  public listGirl=[
    {
      photourl: "../../../assets/manhboi.jpg",
      name: "Mạnh Đồng Đức",
      age: "23 tuổi",
      price: "23.000/h"
    },
    {
      photourl: "../../../assets/trongboi.jpg",
      name: "Chúa Tể Rạp Xiếc",
      age: "20 tuổi",
      price: "25.000/h"
    },
    {
      photourl: "https://kenh14cdn.com/thumb_w/600/2016/0a0e4df1-ffbd-49eb-acb6-cac2990a3410-1455613937662.jpg",
      name: "Nguyễn Thị Happy Bolla",
      age: "18 tuổi",
      price: "100.000/h"
    },
    {
      photourl:"https://file.tinnhac.com/resize/600x-/2020/01/20/20200120091526-2121.jpg",
      name: "Huỳnh Nguyễn Linh Ly",
      age: "24 tuổi",
      price: "50.000/h"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
