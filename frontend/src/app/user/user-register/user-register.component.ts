import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      userName : new FormControl(null,Validators.required),
      email : new FormControl(null,[Validators.required,Validators.email]),
      password : new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(18)]),
      cpassword : new FormControl(null,Validators.required),
      mobile: new FormControl(null,[Validators.required,Validators.maxLength(10)])
    },{validators : this.passwordMatchingValidator})
  }

  passwordMatchingValidator : ValidatorFn = (control : AbstractControl) : ValidationErrors | null =>{
    const password = control.get('password');
    const cpassword = control.get('cpassword');
    return password?.value === cpassword?.value ? null : { notmatched: true };
  }

  //Getter Methods
  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }

  get email(){
    return this.registrationForm.get('email') as FormControl;
  }

  get password(){
    return this.registrationForm.get('password') as FormControl;
  }

  get cpassword(){
    return this.registrationForm.get('cpassword') as FormControl;
  }

  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }
  onSubmit(){
    console.log(this.registrationForm);
  }
}
