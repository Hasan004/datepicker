import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../models/Contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  serverName : string = ""; 
  contacts: Contact[];

  newContact = {} as Contact;

  ableButton: boolean = false;
  serverCreationStatus : string = "no server was created";

  constructor(public service : ContactService, private router : Router){
    setTimeout(() => {
      this.ableButton = true;
    }, 2000);
  }

  onCreateServer(){
    this.serverCreationStatus = "server was created with name " + this.serverName;
  }

  addContact() : void{
    this.service.add(this.newContact);
    alert("Contact "+this.newContact.firstname+" is succesvol toegevoegd aan uw lijst!");
    this.newContact = {} as Contact;
    this.router.navigate(['/list'])
  }

}
