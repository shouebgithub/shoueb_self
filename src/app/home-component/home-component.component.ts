import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-home-component',
  imports: [UserComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponentComponent {
  city = "Chicago"  
  users = [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 3, name: 'Jessica'}, {id: 4, name: 'Poornima'}]
  isEditable: boolean = true;
  newCount = 100;
  itemCount = 0;
  countShow(data: number) {
   this.itemCount = data;  
  }
  Decrement(data:number){
    this.newCount = data;   
  } 
}
