import { CreateContatService } from './../services/create-contat.service';
import { Contact } from './../models/contact.model';
import { Component, OnInit, Input } from '@angular/core';

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

  constructor(private service: CreateContatService) {}


  ngOnInit(): void {
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

  limparCampos() {
    this.name = ""
    this.email = ""
    this.telephone = ""
  }

}
