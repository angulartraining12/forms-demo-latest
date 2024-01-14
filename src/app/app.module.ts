import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReacrtivesignupformComponent } from './reacrtivesignupform/reacrtivesignupform.component';

import { UserService } from './user.service';
import { AuthorsService } from './authors.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsbybookidComponent } from './authorsbybookid/authorsbybookid.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatedrivenformComponent,
    ReacrtivesignupformComponent,
    AuthorsComponent,
    AuthorsbybookidComponent,
    LoginComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [UserService, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
