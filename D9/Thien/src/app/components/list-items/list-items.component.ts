import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';
import {PaymentService} from '../../services/payment.service';
@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  constructor(public dataSv:DataService,public paySV:PaymentService) { }
  public ListItem : Array<Item> = []
  ngOnInit(): void {
    console.log(this.dataSv.ListItem);
    this.ListItem = this.dataSv.ListItem;
  }
  
  getTotal()
  {
    let total=this.paySV.Total();
    alert(`Hello, Tong tien ban la: ${total}vnd`);
  }
  }
  


