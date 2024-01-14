import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isUserLoggedIn : boolean = false;
  errorCode : number = 0;
  isFormSubmitted : boolean = false;

 
constructor(private formBuilder : FormBuilder, private userService : UserService){
}

processLoginData() {
console.log(this.loginForm.value);
this.isFormSubmitted = true;
this.userService.validateLoginUser(this.loginForm.value).subscribe(
     (response:any) => {    // success handling
             console.log('response received -> '+JSON.stringify(response));
             this.isUserLoggedIn = true;
            
     },

     (error : HttpErrorResponse) => {
          console.log('Encountered error while calling addUsers API :: ');
          console.log('Error Details ::'+error.status);
          this.errorCode = error.status;
     }
);
}

loginForm: FormGroup  = this.formBuilder.group({
      username : ["", [Validators.required, Validators.minLength(5)]],
      password : ["", [Validators.required, Validators.minLength(5)]]
});


}
