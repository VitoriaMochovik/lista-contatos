import { CreateContatService } from './../services/create-contat.service';
import { Contact } from './../models/contact.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {MAT_FORM_FIELD, MatFormField, MatFormFieldControl} from '@angular/material/form-field';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css'],

})
export class NewContactComponent implements OnInit {

  @Input() contatos: any[] = []

  public name: string = ""
  public email: string = ""
  public telephone: string = ""
  public id: string = ""

  constructor(private service: CreateContatService,
    private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
         this.id = params['id']
        const contact$ = this.service.loadById(this.id)

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
      id: this.id,
      name: this.name,
      email: this.email,
      telephone_number: this.telephone
    }

    if(this.id === undefined) {
       this.service.createContact(contact).subscribe(resultado => {
      alert("Contato criado com sucesso!")
      },
      error => console.error(error.message)
    )

    } else {
      this.service.updateContact(contact).subscribe(resultado => {
        alert("Contato atualizado!")
      },
      error => console.log(error))
    }

    this.limparCampos()
  }

  limparCampos() {
    this.name = ""
    this.email = ""
    this.telephone = ""
  }

}



