import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrl: './templatedrivenform.component.css'
})
export class TemplatedrivenformComponent {

    processRegisterForm(registerData : NgForm){
      console.log('Register form has been submitted');
      console.log('registerData -> '+JSON.stringify(registerData.value));
    }

}
