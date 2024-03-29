import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reacrtivesignupform',
  templateUrl: './reacrtivesignupform.component.html',
  styleUrl: './reacrtivesignupform.component.css'
})
export class ReacrtivesignupformComponent {
     //formBuilder : FormBuilder;
     isUserAdded : boolean = false;
     errorCode : number = 0;
     isFormSubmitted : boolean = false;

    
  constructor(private formBuilder : FormBuilder, 
             private userService : UserService,
             private router : Router){
    //this.formBuilder = formBuilder;
  }

 processSignupData() {
  console.log(this.signupForm.value);
  this.isFormSubmitted = true;
  this.userService.registerUser(this.signupForm.value).subscribe(
        (response:any) => {    // success handling
                console.log('response received -> '+JSON.stringify(response));
                this.isUserAdded = true;
                this.router.navigate(['/login']);
        },
   
        (error : HttpErrorResponse) => {
             console.log('Encountered error while calling addUsers API :: ');
             console.log('Error Details ::'+error.status);
             this.errorCode = error.status;
        }
  );
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


  
}
