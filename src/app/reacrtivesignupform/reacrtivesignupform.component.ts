import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reacrtivesignupform',
  templateUrl: './reacrtivesignupform.component.html',
  styleUrl: './reacrtivesignupform.component.css'
})
export class ReacrtivesignupformComponent {
     //formBuilder : FormBuilder;

    


  // signupForm: FormGroup  = new FormGroup({
  //     'firstname' : new FormControl("", [Validators.required, Validators.minLength(5)]),
  //     'lastname' : new FormControl("", [Validators.required, Validators.minLength(5)]),
  //     'username' : new FormControl("", [Validators.required, Validators.minLength(5)]),
  //     'password' : new FormControl("", [Validators.required, Validators.minLength(5)]),
  //     'reEnterPassword' : new FormControl("", [Validators.required, Validators.minLength(5)]),
  //     'email' : new FormControl("", [Validators.required, Validators.email]),
  //     'mobile' : new FormControl("", [Validators.required]),
  //     'dob' : new FormControl("", [Validators.required]),
  //     'gender' : new FormControl("", [Validators.required])
  // });

  constructor(private formBuilder : FormBuilder, private userService : UserService){
    //this.formBuilder = formBuilder;
 }

  signupForm: FormGroup  = this.formBuilder.group({
    firstname : ["", [Validators.required, Validators.minLength(5)]],
    lastname : ["",  [Validators.required, Validators.minLength(5)]],
    username : ["", [Validators.required, Validators.minLength(5)]],
    password : ["", [Validators.required, Validators.minLength(5)]],
    reEnterPassword : ["", [Validators.required, Validators.minLength(5)]],
    email : ["", [Validators.required, Validators.email]],
    mobile : ["", [Validators.required]],
    dob : ["", [Validators.required]],
    gender : ["", [Validators.required]]
});



  processSignupData() {
    console.log(this.signupForm.value);
    this.userService.registerUser(this.signupForm.value);
  }
}
