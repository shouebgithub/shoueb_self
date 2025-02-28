import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  username = "shoueb ahmed";
  message = '' 
  isLoggedin = true;
  private count = 0;
  favoriteFramework=''
  private newcount = 100;
  // occupation = '';
  isServerRunning: boolean = false;
  operatingSystems = [{ id: 'win', name: 'Windows' }, { id: 'osx', name: 'MacOS' }, { id: 'linux', name: 'Linux' }];
  @Input() name = "";
  @Input() occupation = '';
  @Output() decrementEventCounter = new EventEmitter<number>()
 greet():void {
   alert(`Welcome to Event Binding concept by ${this.username}`);
  }
  onMouseOver() {
    // this.message = "On the way to event binding using Event Handler";
    // alert("mouse over working");
    console.log("welcome to event handler");    
  }
  @Output() incrementCountEvent  = new EventEmitter<number>()

  onClick() { 
    this.count++
    this.incrementCountEvent.emit(this.count);
    // console.log(this.count);
  }
 
  decrementCount(){
    this.newcount--;
    this.decrementEventCounter.emit(this.newcount)
  }
  showFramework(){
    alert(this.favoriteFramework); 
  }

}
