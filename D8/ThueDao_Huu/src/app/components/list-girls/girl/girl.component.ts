import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-girl',
  templateUrl: './girl.component.html',
  styleUrls: ['./girl.component.scss']
})
export class GirlComponent implements OnInit {
  @Input() girl!:any
  constructor() { }

  ngOnInit(): void {
    console.log(this.girl)
  }

}
