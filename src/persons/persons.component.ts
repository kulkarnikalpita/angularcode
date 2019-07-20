import { Component, Input, OnInit} from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'

})
export class PersonsComponent implements OnInit {
  personList: string[];
  //private personService: PersonsService;
 /**  @Input() personList: string[];*/
  constructor(private prsService: PersonsService) {
    //this.personService = prsService;
   // this.personList = prsService.persons;
  }

  ngOnInit() {
    this.personList = this.prsService.persons;

}}
