import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.sass']
})
export class ServersComponent {
  allowNewServer = false
  serverCreationStatus = 'No server was created!'
  serverName = 'Selen'
  listOfServers : string[] = []

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  servers = ['test server','test server 2']

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName
    console.log('ne')
    console.count('ne')
    console.info('infooo')
    console.error('error')
    console.warn('warning, selen yel')
    console.debug('debug')
    this.listOfServers.push(this.serverName);
    this.serverName=''
    this.servers.push(this.serverName); 
  }

  onUpdateServerName(event:any){
    console.log(event.data)
    //this.serverName = event.data;
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

/*
<script> 
var app = angular.module('myApp', []) 
app.controller("myController", function ($log) { 
            $log.log('This is log.'); 
            $log.error('This is error.'); 
            $log.info('This is info.'); 
            $log.warn('This is warning.'); 
            $log.debug('This is debugging.'); 
        }); 
</script> 
*/
