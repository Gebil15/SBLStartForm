import { Component, OnInit } from '@angular/core';
import {RequestServiceService} from "../services/request-service.service";
import {SblStartRequest} from "../models/sblStartRequest";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { CiStartRequest } from '../models/ciStartRequest';

@Component({
  selector: 'app-start-form',
  templateUrl: './start-form.component.html',
  styleUrls: ['./start-form.component.css']
})
export class StartFormComponent implements OnInit {

  startForm: FormGroup;

  input_user_id: string;
  input_module_id: string;
  input_name: string;
  input_gender: string;

  constructor(private fb: FormBuilder, private requestService: RequestServiceService) {
    this.startForm = fb.group({
      'user_id': [null, Validators.required],
      'module_id': [null, Validators.required],
      'gender': [null, Validators.required],
      'name': [null, Validators.required]
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
        console.error(error);
        document.getElementById('message').innerHTML = error.error.message;
      }
    );
  }

  startCI(input_user_id: string, input_module_id: string, input_gender: string, input_name: string) {
    return this.requestService.startCI(new CiStartRequest(input_user_id, input_module_id, input_gender, input_name)).subscribe(
      data => {
        console.log(data);
        document.getElementById('message').innerHTML = data.message;
      },
      error => {
        console.error(error);
        document.getElementById('message').innerHTML = error.error.message;
      }
    );
  }
}
