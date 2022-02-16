import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-list-girls',
  templateUrl: './list-girls.component.html',
  styleUrls: ['./list-girls.component.scss']
})
export class ListGirlsComponent implements OnInit {

  constructor(
    public dataSV:DataService,
    public paySV: PaymentService
    ) { }

  public listGirl: Array<any> = []

  ngOnInit(): void {
    console.log(this.dataSV.data);
    this.listGirl = this.dataSV.data
  }

  getTotal(){
    let total = this.paySV.getTotal()
    alert( `Tong tien la: ${total} VND`)
  }

}
