import { Injectable } from '@angular/core';
import { Contact } from '../contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ContactService {
  private contactsUrl = 'https://mini-crm-api.herokuapp.com/api/v1/contacts';  // URL to web api

  constructor(
    private http: HttpClient) { }

  getContacts (): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl).pipe(
        catchError(this.handleError('getContacts', []))
      );
  }

  addContact (contact: Contact): Observable<any> {
    return this.http.post(this.contactsUrl, contact, httpOptions).pipe(
      tap(_ => this.log(` contact =${contact.firstName}`)),
      catchError(this.handleError<any>('create contact'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
  // getContacts(): Observable<Contact[]> {
  //   return this.http.get<Contact[]>(this.contactsUrl);  }
}
