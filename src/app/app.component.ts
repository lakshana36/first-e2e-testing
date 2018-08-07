import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  total: number;
  items=[
    {name:'item1',price:1},
    {name:'item2',price:2}
  ];
  constructor()
  {
      this.calculate();
  }
  calculate(){
      this.total=this.items.reduce((sum,item) => sum+this.items["price"],0);
  };
}

