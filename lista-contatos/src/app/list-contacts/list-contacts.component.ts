import { CreateContatService } from './../services/create-contat.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {
  @Input() contatos: any[] = []

  constructor(private service: CreateContatService) { }

  ngOnInit(): void {
    this.service.getAllContacts().subscribe((x) => (this.contatos = x))
  }

}
