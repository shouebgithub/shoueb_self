import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarService } from '../car.service';
import { BikeService } from '../bike.service';

@Component({
  selector: 'app-form-demo',
  imports: [ReactiveFormsModule],
  templateUrl: './form-demo.component.html',
  styleUrl: './form-demo.component.scss'
})
export class FormDemoComponent {
  
  carService = inject(CarService);

  display = ''
  showBikes = ''
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  handleSubmit(){
    alert(
      this.profileForm.value.name + '|' + this.profileForm.value.email
    )
    // console.log(this.profileForm.value)
  }
  constructor(private bikes: BikeService ) {
    this.display = this.carService.getCars().join(' ⭐️ ');
    console.log(this.carService)
    console.log(this.bikes);
    this.showBikes = this.bikes.getbikes().join(' * ')
}
}
