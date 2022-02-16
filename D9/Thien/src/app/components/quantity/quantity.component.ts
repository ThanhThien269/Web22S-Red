import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent implements OnInit {

  constructor() { }
  @Input() couter = 0;
  @Output() onChange = new EventEmitter();
   public increment() {
     if(this.couter >= 50){
     return;
   }else{
     this.couter++;
     this.SL--;
     this.onChange.emit(this.couter)
   }
   }
 
   public decrement(){
     if(this.couter <= 0){
       return;
     }else{
       this.couter--;
       this.SL++;
        this.onChange.emit(this.couter)
     }
    }
  public SL=50;
  ngOnInit(): void {
  }
  
  public buy(){
    
  }
}
