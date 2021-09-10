import { Component, OnInit, Input} from '@angular/core';
import { Contact } from './../models/contact.model';
import { CreateContatService } from './../services/create-contat.service';


@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
  @Input() contato: any[] = []

  public name: string = ""
  public email: string = ""
  public telephone: string = ""

  constructor(private service: CreateContatService) { }

  ngOnInit(): void {
  }

  update() {
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


}
