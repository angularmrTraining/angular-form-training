import { Component, OnInit } from '@angular/core';

import { Contact } from '../../contact';
import { Address } from '../../address';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  roles = ['Internal User', 'Admin', 'Customer'];
  genders = ['male', 'female'];
  model = new Contact('John', 'Doe', 'Internal User', new Address());

  submitted: boolean = false;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.contactService.addContact(this.model)
     .subscribe(() => this.submitted = true);
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  newContact() {
    this.model = new Contact('', '', '', new Address());
  }
}
