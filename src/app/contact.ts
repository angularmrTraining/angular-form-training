import { Adress } from './adress';

export class Contact {
  public id: number;
  public firstName: string;
  public lastName: string;
  public jobPosition: string;
  public company: string;
  public phoneNumber: number;
  public fax: string;
  public email: string;
  public role: string;
  public adress: Adress;

  constructor(firstName: string, lastName: string, role: string, adress: Adress) {
    this.adress = new Adress();
    this.jobPosition = '';
    this.company = '';
    this.email = '';
    this.fax = '';
    this.phoneNumber = 0;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
   }
}
