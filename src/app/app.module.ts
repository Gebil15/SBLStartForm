import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartFormComponent } from './start-form/start-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { RequestServiceService } from "./services/request-service.service";

@NgModule({
  declarations: [
    AppComponent,
    StartFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RequestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
