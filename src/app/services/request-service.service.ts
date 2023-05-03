import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SblStartRequest} from "../models/sblStartRequest";
import {Message} from "../models/Message";
import { CiStartRequest } from '../models/ciStartRequest';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  private url: string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/ciStartCall';
    //this.url = 'http://localhost:8080/generateAnswer';
  }

  startSBL(sblStartRequest: SblStartRequest) {
    return this.http.post<Message>(this.url, sblStartRequest, this.httpOptions)
      .pipe();
  }

  startCI(ciStartRequest: CiStartRequest) {
    return this.http.post<Message>(this.url, ciStartRequest, this.httpOptions)
      .pipe();
  }
}
