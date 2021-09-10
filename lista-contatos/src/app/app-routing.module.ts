import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ListContactsComponent},
  {path: 'cadastro', component: NewContactComponent },
  {path: 'contatos', component: ListContactsComponent },
  {path: 'editar/:id', component: NewContactComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//redirectTo: '' pathMath: "full"
