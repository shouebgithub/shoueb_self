import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminform',
  imports: [ReactiveFormsModule],
  templateUrl: './adminform.component.html',
  styleUrl: './adminform.component.scss'
})
export class AdminformComponent {
adminForm = new FormGroup({
  name: new FormControl('', Validators.required),
  sex: new FormControl("male", Validators.required),
});

handleSubmit() {
  console.log("working")
  alert(
`name is ${this.adminForm.value.name} who is a ${this.adminForm.value.sex}`
  ); 
}

}
