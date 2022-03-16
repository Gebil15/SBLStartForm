import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SblStartRequest} from "../models/sblStartRequest";

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  private url: string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {
    this.url = 'http://7602-2a04-ee41-86-f062-5d6e-c6b3-3866-6d87.ngrok.io/testForm';
  }

  startSBL(sblStartRequest: SblStartRequest) {
    return this.http.post<SblStartRequest>(this.url, sblStartRequest, this.httpOptions)
      .pipe();
  }
}
