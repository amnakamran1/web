import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl,Validators,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
    title = 'Student login form';
  
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

