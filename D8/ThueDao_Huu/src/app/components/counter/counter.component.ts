import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  public counter=0;
  
  constructor() { }
  public increase(): any{
    this.counter+=0.5;
  }
  public setZerovalue(n: any): any {
    return (n=0);
  }
  public decrease(): any{
    if (this.counter <=0){
      this.setZerovalue(this.counter);
    } else
    {
      this.counter-=0.5;
    }
  }
  
  ngOnInit(): void {
  }

}
