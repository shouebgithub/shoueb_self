import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  imports: [],
  templateUrl: './observable-demo.component.html',
  styleUrl: './observable-demo.component.scss'
})
export class ObservableDemoComponent {
  data:Array<any>= [];

  myObervable = new Observable((observer)=>{
    setTimeout(()=>{ observer.next(1); }, 1000);
    setTimeout(()=>{ observer.next(2); }, 2000);
    setTimeout(()=>{ observer.next(3); }, 3000);
    setTimeout(()=>{ observer.next(4); }, 4000);
    setTimeout(()=>{ observer.next(5); }, 5000);
  
  });
  
  getData(){
    this.myObervable.subscribe((val:any)=>{
      this.data.push(val);
    })
  }
  
}
