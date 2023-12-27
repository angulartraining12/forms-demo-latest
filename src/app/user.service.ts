import { Injectable } from '@angular/core';
import { RegisterData } from './register-data';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  registerUser(signupForm: FormGroup){
      console.log('UserService : registerUser is called '+signupForm.value);
            // Logic goes here to call server side program which persists or stores the data in DB table.
  }
}
