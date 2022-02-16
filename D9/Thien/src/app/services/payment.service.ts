import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(public data:DataService) { }

Total(){
  let total = 0;
  for(let i = 0;i<this.data.ListItem.length;i++){
    total += parseInt(this.data.ListItem[i].price) * this.data.ListItem[i].quantity;
  }
   return total;
}
}
