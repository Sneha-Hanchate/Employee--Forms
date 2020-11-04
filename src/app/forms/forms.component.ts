import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  signupForm: FormGroup;
  invalidNames: string []=['Hello', 'Hiii'];

  constructor() { }

  ngOnInit(): void {

    this.signupForm= new FormGroup({

      name: new FormControl(null,[
        Validators.required,
        Validators.minLength(6),
        this.invalidNameValidation.bind(this),
      ]),

      email: new FormControl(null,[
        Validators.required,
        Validators.email
      ]),

      passwordgroup: new FormGroup({
      password: new FormControl(null,[Validators.required]),
      confpassword: new FormControl(null,[Validators.required]),
    } ,[this.matchPasswordError.bind(this)],
    ),

    });
  }


  onSubmit()
  {
    console.log(this.signupForm);
  }

  invalidNameValidation(control: AbstractControl): {[key:string]:boolean}{
    if(this.invalidNames.indexOf(control.value)>=0){
      return {invalidName:true};
    }
    return null;
  }

  matchPasswordError(control: AbstractControl):{[key:string]:boolean}{
    if(control.get('password').value != control.get('confpassword').value){
      return {passwordMatchError: true};
    }
    return null;
  }
}
