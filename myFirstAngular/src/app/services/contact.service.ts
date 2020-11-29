import { HttpClient } from '@angular/common/http';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Contact } from '../models/Contact';

@Injectable({providedIn: 'root' })
export class ContactService {

    private url = 'http://localhost:9080/rest/resources/contacts';
    _contactsUpdated$ = new Subject<Contact[]>();

  // Class --> object
  contacts: Contact[];

  constructor(private http: HttpClient) { }

  get contactsUpdated$(): Subject<Contact[]> {
    return this._contactsUpdated$;
  }

//   getAllContacts(): Contact[] {
//     return this.contacts;
//   }

    getAll() : Observable<Contact[]> {
        this.http.get<Contact[]>(this.url) // get data from a server
        .subscribe(contacts => this.contactsUpdated$.next(contacts)); // when received do this

        return this.contactsUpdated$;

    }

  add(p: Contact): void {
    this.http.post<Contact[]>(this.url, p).subscribe(() => this.getAll());
  }

  delete(c: Contact): void {
      this.http.delete<Contact[]>(`${this.url}/${c.id}`).subscribe(() => this.getAll());
  }

  update(id: number, c: Contact): void {
    this.http.put<Contact[]>(`${this.url}/${id}`, c) 
      .subscribe(() => this.getAll());
  }

//   getById(id : number) : any {
//     return this.http.get<Contact>(`${this.url}/${id}`)
//     .subscribe(() => this.getAll());
//     // console.log(this.contac.firstname)
// }

}