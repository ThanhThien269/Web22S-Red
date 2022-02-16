import { Component, Input, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service'
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(
    public ServicesService:ServicesService
  ) { }
  @Input() item!:any
  ngOnInit(): void {
    // console.log(this.item)
  }

  getData(){
    let total = 0;
    for(let i = 0; i<this.ServicesService.array.length; i++){
      total += this.ServicesService.array[i].Quantity * this.ServicesService.array[i].newPrice;
    }
    alert(total)
  }

}
