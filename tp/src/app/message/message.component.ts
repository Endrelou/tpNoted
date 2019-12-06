import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message';
import { ChannelService } from '../channel.service';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()
  message: Message;

  ngOnInit() {
  }

  
}
