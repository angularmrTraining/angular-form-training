import { Pipe, PipeTransform } from '@angular/core';
import { ApiContact } from '../api-contact';
import { Contact } from '../contact';

@Pipe({
  name: 'contact'
})
export class ContactPipe implements PipeTransform {

  transform(value: ApiContact, args?: any): Contact {
    const contact = new Contact(value.firstName, value.lastName, '', value.address);
    contact.id = value.id;
    contact.bio = value.bio;
    contact.gender = value.gender;
    contact.email = value.email;
    contact.phone = value.phone;
    return contact;
  }

}
