import { Address } from "./address";

export class Contact {

  public id: string;
  public firstName: string;
  public lastName: string;
  public address: Address;
  public role: string;
  public middleName: string;
  public gender: string;
  public email: string;
  public phone: string;
  public bio: string;
  public jobPosition: string;
  public company: string;

  constructor(firstName: string, lastName: string,role: string, address: Address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.address = address;
    this.gender = 'male';
  }
}
