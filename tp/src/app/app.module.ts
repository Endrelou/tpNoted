import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { MessageComponent } from './message/message.component';
import { ChannelComponent } from './channel/channel.component';
import { MyChannelComponent } from './my-channel/my-channel.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ChannelComponent,
    MyChannelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
