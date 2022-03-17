import { Component, OnInit } from '@angular/core';
import {RequestServiceService} from "../services/request-service.service";
import {SblStartRequest} from "../models/sblStartRequest";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-start-form',
  templateUrl: './start-form.component.html',
  styleUrls: ['./start-form.component.css']
})
export class StartFormComponent implements OnInit {

  startForm: FormGroup;

  input_user_id: string;
  input_module_id: string;

  constructor(private fb: FormBuilder, private requestService: RequestServiceService) {
    this.startForm = fb.group({
      'user_id': [null, Validators.required],
      'module_id': [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  startSBL(input_user_id: string, input_module_id: string) {
    return this.requestService.startSBL(new SblStartRequest(input_user_id, input_module_id)).subscribe(
      data => {
        console.log(data);
        document.getElementById('message').innerHTML = data.message;
      },
      error => {
        console.log('not good');
        console.error(error);
        document.getElementById('message').innerHTML = error.message;
      }
    );
  }
}
