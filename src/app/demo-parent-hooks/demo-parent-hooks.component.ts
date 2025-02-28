import { Component } from '@angular/core';
import { LifecyclehooksComponent } from '../lifecyclehooks/lifecyclehooks.component';

@Component({
  selector: 'app-demo-parent-hooks',
  imports: [LifecyclehooksComponent],
  templateUrl: './demo-parent-hooks.component.html',
  styleUrl: './demo-parent-hooks.component.scss'
})
export class DemoParentHooksComponent {

  constructor(){
    console.log("parent constructor is called");
  }
// msg:string = "Hello, world";
inputval = '';
showMsg(inputEL: HTMLInputElement){
  // console.log(inputEL);
   this.inputval = inputEL.value;
}
}
