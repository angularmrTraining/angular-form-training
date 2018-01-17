import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../contact';
import { ApiContact } from '../api-contact';

@Pipe({
  name: 'apiContact'
})
export class ApiContactPipe implements PipeTransform {

  transform(value: Contact, args?: any): ApiContact {
    const apiContact = new ApiContact(value.firstName, value.lastName, value.address);
    apiContact.id = value.id;
    apiContact.bio = value.bio;
    apiContact.email = value.email;
    apiContact.gender = value.gender;
    apiContact.phone = value.phone;
    return apiContact;
  }

}
