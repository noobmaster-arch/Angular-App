import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Form } from './form';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  configUrl: string='https://cs251-outlab-6.herokuapp.com/initial_values/';
  postUrl: string='https://cs251-outlab-6.herokuapp.com/add_new_feedback/';
  getForm() {
    return this.http.get<Form>(this.configUrl);
  }

  sendinfo(formData: Form){
    var body= JSON.stringify(formData);
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Headers': 'Content-Type',
      })
    };
    return this.http.post(this.postUrl, body);
  }
  constructor( private http: HttpClient) { }
}
