import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterData } from '../register-data';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrl: './templatedrivenform.component.css'
})
export class TemplatedrivenformComponent {
  registerData: RegisterData= new RegisterData();
  validInput  : string = "validInputClass";
  invalidInput  : string = "invalidInputClass";

  location  = {'name' : 'Hyd', 'zipcode':'500050'};


    processRegisterForm(registerData : NgForm){
      console.log('Register form has been submitted');
      console.log('registerData : from ngForm -> '+JSON.stringify(registerData.value));
      console.log('registerData from class -> '+JSON.stringify(this.registerData));
    }


    registerUser(){
      // call service by passing the registerData
      // service.registerUser(this.registerData);
      // service.registerUser(username, password, reenterpassword);
    }

}
