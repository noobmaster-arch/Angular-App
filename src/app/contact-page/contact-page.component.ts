import { Component, OnInit } from '@angular/core';
export interface Person {
  name: string,
  mail: string,
  phone: string
}
export const PERSON: Person[] = [
  {
  name: 'Mukesh Reddy',
  mail: 'julakantimukeshreddy123@gmail.com',
  phone: '+91 93477 16867'
  },
  {
    name: 'Savyasach Reddy',
    mail: 'esavyareddy@gmail.com',
    phone: '+91 93901 61339'
  }
];
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {


  persons = PERSON;
  ngOnInit(): void {
  }

}
