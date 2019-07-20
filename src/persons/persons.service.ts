import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
/** injectable: component define that it needs certain class or ojects and angular gives that element to that class to that component*/
export class PersonsService {
  persons: string[] = ['Fab', 'mark', 'david'];
  addPerson(name: string) {
    this.persons.push(name);
  }
}
