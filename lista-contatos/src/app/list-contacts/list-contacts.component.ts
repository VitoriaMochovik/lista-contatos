import { Contact } from './../models/contact.model';
import { CreateContatService } from './../services/create-contat.service';
import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {
  @Input() contatos: any[] = []

  //@Output() updateContact = ""
  //@Output() deleteContact = new EventEmitter()

  constructor(private service: CreateContatService) { }

  ngOnInit(): void {
    this.service.getAllContacts().subscribe((x) => (this.contatos = x))
  }

  update(contact: Contact) {
    this.service.updateContact(contact)
  }

  delete(contact: Contact){
    this.service.deleteContact(contact).subscribe(resultado => {
      console.log(resultado)
    },
    error => console.error())
  }
}


// this.service.createContact(contact).subscribe(resultado => {
//   console.log(resultado)
//   },
//   error => console.error()
// )
