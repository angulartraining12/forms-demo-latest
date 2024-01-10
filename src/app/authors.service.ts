import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
 // httpClient : HttpClient = new HttpClient();
  constructor(private httpClient : HttpClient) { }
  authorsByBookIdUrl :  string = "https://fakerestapi.azurewebsites.net/api/v1/Authors/authors/books/";

  getAllAuthors() : Observable<any> {
       return this.httpClient.get("https://fakerestapi.azurewebsites.net/api/v1/Authors"); // hard-coded URL
  }


  getAuthorsByBookId(idBook : string) : Observable<any> {
       let url = this.authorsByBookIdUrl +  idBook;
       return this.httpClient.get(url);
  }
}
