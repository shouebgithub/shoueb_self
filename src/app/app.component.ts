import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FormDemoComponent } from './form-demo/form-demo.component';

 
@Component({
  selector: 'app-root',
  imports: [UserComponent, RouterOutlet, RouterLink, HomeComponentComponent, FormDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
