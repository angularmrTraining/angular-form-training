export class Adress {
  public lineOne: string;
  public lineTwo: string;
  public city: string;
  public country: string;
  public zipCode?: number;
  constructor() {
    this.lineOne = '';
    this.lineTwo = '';
    this.city = '';
    this.country = '';
    this.zipCode = 0;
  }
}
