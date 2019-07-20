import { Component, Output, EventEmitter } from '@angular/core';
/** for event binding we use Output  */
@Component ({
  selector: 'app-person-input',
  templateUrl: './person-input-component.html',
  styleUrls: ['./person-input-component.css']
})
export class PersonInputComponent {
  @Output() personCreate = new EventEmitter<string>();
  enteredPersonName = '';
  onCreatePerson(personName: string) {
  console.log('person is created: ' + this.enteredPersonName);
  /**this will display output but its a two way binding but we can update the input value  */
  this.personCreate.emit(this.enteredPersonName);
  this.enteredPersonName = ''; /**to reset or update the input value we have to wite this */
}
}
