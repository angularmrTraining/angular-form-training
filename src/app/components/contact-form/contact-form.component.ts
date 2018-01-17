import { Component, OnInit } from '@angular/core';

import { Contact } from '../../contact';
import { Adress } from '../../adress';
import { ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  roles = ['Internal User', 'Admin', 'Customer'];
  model = new Contact('Mohammed', '', 'Internal User', new Adress());
  submitted: boolean = false;

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.contactService.addContact(this.model)
     .subscribe(() => this.submitted = true);
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  newContact() {
    this.model = new Contact('', '', '', new Adress());
  }

}
