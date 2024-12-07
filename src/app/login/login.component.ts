
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = ' LOGIN FORM';

  studentForm: FormGroup = new FormGroup({
    fname: new FormControl("",[Validators.required,Validators.minLength(4)]),

    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,Validators.minLength(4)]),
  });
 formValue: any;
  onSubmit() {
    this.formValue = this.studentForm.value;
  }
}
