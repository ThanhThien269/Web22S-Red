import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(public dtSV:ServicesService) { }

  public array:Array<any> = []

  ngOnInit(): void {
    console.log(this.dtSV.array);
    this.array = this.dtSV.array
  }

}
