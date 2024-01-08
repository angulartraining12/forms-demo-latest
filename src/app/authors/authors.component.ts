import { Component } from '@angular/core';
import { AuthorsService } from '../authors.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {
  authors : any = [{}]; // Represents array of objects


  constructor(private authorsService : AuthorsService){

  }

  

   // Life-cycle hook
   ngOnInit(){
    console.log('AuthorsComponent : ngOnInit is called');
     this.authorsService.getAllAuthors().subscribe(
        // success handling
        (response:any) => {
           this.authors = response;
        },
       
        // Error handling
        (error :HttpErrorResponse) => { console.log("Error occurred"); }
     )
   }




}
