import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent{

  contacts$ = this.service.getAll();

	constructor(private service : ContactService) { }

   deleteContact(c : Contact):void{
    alert("Weet u zeker dat u het contact " + c.firstname + " met id " + c.id + " wilt verwijderen?")  
    this.service.delete(c);
   }


}
