import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-girl',
  templateUrl: './girl.component.html',
  styleUrls: ['./girl.component.scss']
})
export class GirlComponent implements OnInit {
  @Input() girl!:any
  @Output() onChangeGirl = new EventEmitter;
  constructor(public girlData:DataService) { }
  

  ngOnInit(): void {
    // console.log(this.girlData.data)
  }

  increase(){
    this.girl.timelimit++
    this.onChangeGirl.emit(this.girl.timelimit)
  }

  decrease(){
    if(this.girl.timelimit <=0){
      return;
    } else {
    this.girl.timelimit--
    this.onChangeGirl.emit(this.girl.timelimit)
    }
  }
  
}

