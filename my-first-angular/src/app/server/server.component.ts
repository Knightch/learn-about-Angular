import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-server]',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
   serverid=10;
  serverStatus ='offline';

  constructor() {
  this.serverStatus = Math.random() > 0.6 ? 'online' : 'ofline';
   }

  ngOnInit() {
  
  }
  getServerStatus(){
  return this.serverStatus;
  }
  getColor(){
  return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
