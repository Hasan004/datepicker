import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/Contact';
import { ContactService } from '../services/contact.service';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit{

    id : number;

    constructor(public service : ContactService, private route: ActivatedRoute, private router : Router){
    }
    
      newContact = {} as Contact;

      ngOnInit(){  
        this.id = this.route.snapshot.params['id'];
      }
      
      update(){
          this.service.update(this.id, this.newContact);
          this.router.navigate(['/list']);
      }

}