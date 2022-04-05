import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SblStartRequest} from "../models/sblStartRequest";
import {Message} from "../models/Message";

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  private url: string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {
    this.url = 'https://sbl-trainer-backend.eu.ngrok.io/sblStartCall';
  }

  startSBL(sblStartRequest: SblStartRequest) {
    return this.http.post<Message>(this.url, sblStartRequest, this.httpOptions)
      .pipe();
  }
}
