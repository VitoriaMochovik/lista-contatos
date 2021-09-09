import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'contatos', pathMatch: 'full'},
  {path: 'cadastro', component: NewContactComponent },
  {path: 'contatos', component: ListContactsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
