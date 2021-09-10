import { Contact } from './../models/contact.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BoundElementProperty } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class CreateContatService {

  private url = 'https://lista-contatos-back.herokuapp.com/contacts'

  constructor(private httpClient: HttpClient) { }

  createContact(contact: Contact): Observable<Contact>{
    const body: Contact = contact
    return this.httpClient.post<Contact>(this.url, body)
  }

  loadById(id: string){
    return this.httpClient.get(`${this.url}/${id}`)
  }

  getAllContacts() {
    return this.httpClient.get<Contact[]>(this.url)
  }

  updateContact(contact: Contact): Observable<Contact>{
    const newUrl = `${this.url}/${contact.id}`
    return this.httpClient.put<Contact>(newUrl, contact)
  }

  deleteContact(contact: Contact): Observable<any>{
    const newUrl = `${this.url}/${contact.id}`

    return this.httpClient.delete<any>(newUrl)

  }
}
