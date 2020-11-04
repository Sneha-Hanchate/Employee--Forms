import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  signupForm: FormGroup;
  invalidNamesArr:string[]=['hello','angular'];
  constructor() { }

  ngOnInit(): void {
    this.signupForm= new FormGroup({
      name: new FormControl(null,[
            Validators.required,
            Validators.minLength(5),
            this.invalidNameValidation.bind(this),
          ]),
      email: new FormControl(null,[
              Validators.required,
              Validators.email
            ]),
      passwordgroup: new FormGroup({
      password:new FormControl(null,[
                Validators.required]),
      confirmpassword: new FormControl(null,[
                Validators.required]),
              },
              [this.matchPassword.bind(this)]),

      gender:new FormControl("male"),

      city: new FormControl("bengaluru",[Validators.required]),

      hobbies: new FormArray([]),

      notification:new FormControl('email'),
      phone: new FormControl(null),
    });

  }


  onSignup(){
    console.log(this.signupForm);
  }

  invalidNameValidation(control: AbstractControl):{[key:string]:boolean}{
    if(this.invalidNamesArr.indexOf(control.value)>=0){
      return {invalidName:true};
    }
    return null;
  }

  matchPassword(control: AbstractControl): {[key:string]:boolean}{
    if(control.get('password').value!= control.get('confirmpassword').value){
      return {passwordMatchError: true};
    }
    return null;
  }

  getControl(){
    return (<FormArray> this.signupForm.get('hobbies')).controls;
  }

  OnAddHobbies(){
    if(this.signupForm.get('hobbies').value){
      const control= new FormControl();
      return (<FormArray> this.signupForm.get('hobbies')).push(control);
    }
  }

  OnRemoveHobbies(i){
    return (<FormArray> this.signupForm.get('hobbies')).removeAt(i);
  }

}
