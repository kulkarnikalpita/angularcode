import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsComponent } from 'src/persons/persons.component';
import { PersonInputComponent } from 'src/persons/person-input-component';
const routes: Routes = [
  { path: '', component: PersonsComponent },
  {  path: 'input', component: PersonInputComponent }
  /**input  localhost:4200/input*/
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}
