import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reacrtivesignupform',
  templateUrl: './reacrtivesignupform.component.html',
  styleUrl: './reacrtivesignupform.component.css'
})
export class ReacrtivesignupformComponent {
  signupForm: FormGroup  = new FormGroup({
      'firstname' : new FormControl("", [Validators.required, Validators.minLength(5)]),
      'lastname' : new FormControl("", [Validators.required, Validators.minLength(5)]),
      'username' : new FormControl("", [Validators.required, Validators.minLength(5)]),
      'password' : new FormControl("", [Validators.required, Validators.minLength(5)]),
      'reEnterPassword' : new FormControl("", [Validators.required, Validators.minLength(5)]),
      'email' : new FormControl("", [Validators.required]),
      'mobile' : new FormControl("", [Validators.required]),
      'dob' : new FormControl("", [Validators.required]),
  });

  processSignupData() {
    console.log(this.signupForm.value);
  }
}
