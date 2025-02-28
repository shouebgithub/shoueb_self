import { CommonModule } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild, viewChild} from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  imports: [CommonModule],
  templateUrl: './lifecyclehooks.component.html',
  styleUrl: './lifecyclehooks.component.scss'
})
export class LifecyclehooksComponent implements OnChanges, OnInit, AfterContentInit, AfterViewInit {
@Input() msg:string;

@ViewChild('temp') temppara:ElementRef;
 title = "Title : Lifecycle hook demo"
constructor(){
  console.log("lifecyclehook constructor is called!")
  // console.log(this.title);
  // console.log(this.msg);
  
}
 
ngOnChanges(Changes: SimpleChanges){
console.log("ngOnChanges hook is called!")
console.log(Changes)
}

ngOnInit() {
console.log("ngOnInit called");
}

ngAfterContentInit(){
console.log("ngAfterContentInit is called ");
console.log("in ngAfterContentInit view child is ", this.temppara);

}

ngAfterViewInit(){
console.log("ngAfterViewInit is called");
console.log("in ngAfterViewInit view child is ", this.temppara);
}

}
