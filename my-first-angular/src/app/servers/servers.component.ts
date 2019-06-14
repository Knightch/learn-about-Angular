import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 serverCreationStatus = 'No server Created'
 allowNewServer = false;
  constructor() {
  setTimeout(() => {
   this.allowNewServer = true;
  },2000);
   }

  ngOnInit() {
  }
 onCreateServer(){
  this.serverCreationStatus='server is created';
 }
}
