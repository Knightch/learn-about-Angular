import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 serverCreationStatus = 'No server Created'
 serverName = '';
 allowNewServer = false;
 serverCreated = false;
  constructor() {
  setTimeout(() => {
   this.allowNewServer = true;
  },2000);

   }

  ngOnInit() {
  }
 onCreateServer(){
  this.serverCreated = true;
  this.serverCreationStatus='server is created! name is '+ this.serverName;
 }
 onUpdateServerName(event:Event){
 this.serverName=(<HTMLInputElement>event.target).value;
 }
}
