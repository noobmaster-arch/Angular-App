import { Component, OnInit } from '@angular/core';
import {FormService} from '../form.service';
import {Form} from '../form';
import {Observable} from 'rxjs';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  message: string="";
  bform: Form;
  myform= this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    feedback: ['',[Validators.required]],
    comment: ['']

  });
  constructor( private fb: FormBuilder, private formService: FormService) { }
  
  ngOnInit(): void {
    this.formService.getForm().subscribe( data => {this.bform={...data};
                                                   this.initres();});
    
  }
  initres(){
    this.myform.setValue({
      name: this.bform.name,
      email: this.bform.email,
      feedback: this.bform.feedback,
      comment: this.bform.comment
    })
  }

  sendinfo(formData: Form){
    this.formService.sendinfo(formData).subscribe(res=>{
                                                  this.message="successfully updated";
                                                  this.myform.setValue({
                                                    name:'', email:'', feedback:'', comment:''
                                                  })
                                                }
                                                  , err=>{this.message="Error"} )
  }
  share(){
    if (this.message!=''){    
      if (this.message=="successfully updated") {
        window.alert("Feedback Successfully Updated");
        this.message='';
      } else {
        window.alert("Error");
        this.message='';
      }      
    } 
  }

  grtfb(){
    this.myform.patchValue({
      feedback:'Great'
    })
    this.bform.feedback='Great';
  }
}