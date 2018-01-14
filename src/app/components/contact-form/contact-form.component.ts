import { Component, OnInit } from '@angular/core';

import { Contact } from '../../contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  roles = ['Internal User', 'Admin', 'Customer'];
  model = new Contact('Mohammed', '', 'Internal User');

  submitted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  newContact() {
    this.model = new Contact('', '', '');
  }

}
