import { Injectable } from '@angular/core';
import { RegisterData } from './register-data';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  //httpClient1 : HttpClient = new HttpClient();

  constructor(private httpClient : HttpClient) { }   // dependency Injection

  registerUser(signupForm: FormGroup) :Observable<any> {
      console.log('UserService : registerUser is called '+signupForm);
      return this.httpClient.post<any>("http://localhost:8080/api/users", signupForm);
  }
}
