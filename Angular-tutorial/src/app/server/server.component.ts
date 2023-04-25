import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  ServerId: number = 1
  ServerStatus: string = 'offline';

  serverstatus(){
    return this.ServerStatus;
  }
}
