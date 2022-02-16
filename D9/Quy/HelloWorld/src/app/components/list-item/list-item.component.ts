import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  constructor(public dataSV:DataService,public paymentSv: PaymentService) { }
  public ListItem: Array<Item> = []
  ngOnInit(): void {
    console.log(this.dataSV.ListItem);
    this.ListItem = this.dataSV.ListItem;
  }
  

}
