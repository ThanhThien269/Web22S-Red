import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // img: []
})
export class AppComponent {
  title = 'Calculator';
  
  ngOnInit() {
    console.log(`helo`)
  }
 
  undo(){
    console.log(document.getElementById("del")?.innerHTML)
    console.log( 12312 + 2312312)
  }
  clean(){
    console.log('Cleaned');
  }

  equal()
  {
    console.log("Hello");
  }

}
