import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { EventEmitter } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    NewContactComponent,
    ListContactsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
