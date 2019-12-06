import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message';
import { MyChannel } from './my-channel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private http: HttpClient) { }

  getChannels(): Observable<MyChannel[]> {
    return this.http.get<MyChannel[]>(`${environment.backUrl}/channels`)
  }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${environment.backUrl}/messages`)
  }

  addMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(`${environment.backUrl}/messages`, message)
  }
}
