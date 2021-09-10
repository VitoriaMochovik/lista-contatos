import { CreateContatService } from './../services/create-contat.service';
import { Contact } from './../models/contact.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {


 @Input() contatos: any[] = []

  public name: string = ""
  public email: string = ""
  public telephone: string = ""

  // constructor( name: string, email: string, telephone: string) {
  //   this.name = name
  //   this.email = email
  //   this.telephone = telephone
  // }

  constructor(private service: CreateContatService,
    private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        const id = params['id']
        const contact$ = this.service.loadById(id)

        contact$.subscribe(contact => {
            this.updateInputs(contact)
        })
      }
    )
  }

  updateInputs(contact: any) {
    this.name = contact.name
    this.email = contact.email
    this.telephone = contact.telephone_number
  }

  createContact(){
    const contact: Contact = {
      name: this.name,
      email: this.email,
      telephone_number: this.telephone
    }

    this.service.createContact(contact).subscribe(resultado => {
      console.log(resultado)
      },
      error => console.error()
    )

    console.log("Solicitei", this.name, this.email, this.telephone )
    this.limparCampos()
  }

  update(user: Contact) {
    this.name = user.name
    this.email = user.email
    this.telephone = user.telephone_number

    const contact: Contact = {
      name: this.name,
      email: this.email,
      telephone_number: this.telephone
    }

    this.service.updateContact(contact).subscribe(resultado => {
      console.log(resultado)
    },
    error => console.error())
  }

  limparCampos() {
    this.name = ""
    this.email = ""
    this.telephone = ""
  }

}
