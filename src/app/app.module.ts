import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonsComponent } from 'src/persons/persons.component';
import { PersonInputComponent } from 'src/persons/person-input-component';
import { AppRoutingModule } from './app-routing.module';
import { PersonsService } from 'src/persons/persons.service';
@NgModule({
 /** here we have define all components we want a use inside of this module each has to be define*/
  declarations: [
    AppComponent, PersonsComponent, PersonInputComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule],


  bootstrap: [AppComponent] /**we can add multiple components here */
})
export class AppModule { }
