import { Component, OnInit } from '@angular/core';
import { MyChannel } from "../my-channel";
import { ChannelService } from '../channel.service';
import { Message } from '../message';

@Component({
  selector: 'channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {
  channels: MyChannel[] = [];
  messages: Message[] = [];

  mymsg: string;

  constructor(private channelService: ChannelService) { }

  ngOnInit() {
    this.refreshChannels();
    this.refreshMessages();
  }

  private refreshChannels() {
    this.channelService.getChannels().subscribe(
      (channels: MyChannel[]) => this.channels = channels
    )
  }


  private refreshMessages() {
    this.channelService.getMessages().subscribe(
      (messages: Message[]) => this.messages = messages
    )
  }


  addMessage() {
    const newMessage: Message = {
      idS: 2,
      content: this.mymsg,
      date: new Date()
    }
      this.channelService.addMessage(newMessage).subscribe((message: Message) => {
        this.messages.push(message)
      })
  }


}
