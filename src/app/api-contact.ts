import { Contact } from "./contact";
import { Address } from "./address";

export class ApiContact {

  public id: string;
  public firstName: string;
  public lastName: string;
  public address: Address;
  public bio: string;
  public gender?: string;
  public email: string;
  public phone?: string;


  constructor(firstName: string, lastName: string, address: Address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }

}
