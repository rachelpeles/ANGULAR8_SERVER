import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homeWork';
  showSalarys:boolean=true;
  setShowSalarys(value:boolean){
    this.showSalarys=value;
    console.log(this.showSalarys);
  }
}
