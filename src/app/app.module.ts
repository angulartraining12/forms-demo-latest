import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReacrtivesignupformComponent } from './reacrtivesignupform/reacrtivesignupform.component';

import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    TemplatedrivenformComponent,
    ReacrtivesignupformComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
