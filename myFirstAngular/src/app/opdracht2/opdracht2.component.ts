import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opdracht2',
  templateUrl: './opdracht2.component.html',
  styleUrls: ['./opdracht2.component.css']
})
export class Opdracht2Component implements OnInit {
  
  username : string = "";
  serverCreationStatus:string = "no server is added";
  displayServerMessage: boolean= false;
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  onUpdateUsername(event: Event){
    this.username = (<HTMLInputElement>event.target).value;
  }

  onCreateServer() :void {
    this.displayServerMessage = true;
    this.serverCreationStatus = "Server is added with servername: " + this.username;
  }

}
