import { Component } from '@angular/core';
import { AuthorsService } from '../authors.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-authorsbybookid',
  templateUrl: './authorsbybookid.component.html',
  styleUrl: './authorsbybookid.component.css'
})
export class AuthorsbybookidComponent {

  constructor(private authorsService : AuthorsService) {
  }

  bookId : string = "";
  authors : any = [];

  getAuthorsByBookId(){

    console.log('Bookd id '+this.bookId);
     this.authorsService.getAuthorsByBookId(this.bookId).subscribe(
        // success resposne processing
        (data : any) => {
            console.log('Response Received :: '+JSON.stringify(data));
            this.authors = data;
        },

        (error : HttpErrorResponse) => {
          console.log("Error occurred");
        }

        // error response processing
     );
  }

}
