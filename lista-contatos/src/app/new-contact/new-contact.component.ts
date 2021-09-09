import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  public name: string = ""
  public email: string = ""
  public telephone: string = ""

  // constructor( name: string, email: string, telephone: string) {
  //   this.name = name
  //   this.email = email
  //   this.telephone = telephone
  // }


  ngOnInit(): void {
  }

  createContact(){
    console.log("Solicitei", this.name, this.email, this.telephone )
  }
}
