import { NewContactComponent } from './../new-contact/new-contact.component';
import { Contact } from './../models/contact.model';
import { CreateContatService } from './../services/create-contat.service';
import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {
  @Input() contatos: any[] = []

  constructor(private service: CreateContatService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getAllContacts().subscribe((x) => (this.contatos = x))
  }

  update(contact: Contact) {
    this.service.updateContact(contact)
  }


  delete(contact: Contact){
    this.service.deleteContact(contact).subscribe(resultado => {
      alert(resultado)
    },
    error => console.log(error)
    )
  }

  onEdit(contact: Contact){
    this.router.navigate(['editar', contact.id])
  }
}
