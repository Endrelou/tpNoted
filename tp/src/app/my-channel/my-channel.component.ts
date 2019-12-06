import { Component, EventEmitter, Output, Input } from '@angular/core';
import { MyChannel } from '../my-channel';


@Component({
  selector: 'app-my-channel',
  templateUrl: './my-channel.component.html',
  styleUrls: ['./my-channel.component.css']
})
export class MyChannelComponent {
  
  channelCourant = 0;

  @Input()
  mychannel: MyChannel;

  //@Output()
  //display: new EventEmitter<MyChannel>();

  //display() {
  //  this.display.emit(this.mychannel)
  //}
}
