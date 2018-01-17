import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Contact } from '../contact'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ApiContact } from '../api-contact';

import { ApiContactPipe } from '../pipes/api-contact.pipe'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContactService {

  private APIUrl = 'https://mini-crm-api.herokuapp.com/api/v1/contacts';  

  constructor( private http: HttpClient, private apiContactPipe: ApiContactPipe ) {
    
  }

  getContacts(): Observable<ApiContact[]> {
    return this.http.get<ApiContact[]>(this.APIUrl).pipe(
      catchError(this.handleError('getContacts', []))
    );
  }

  addContact (contact: Contact):  Observable<any> {
    const apiContact =  this.apiContactPipe.transform(contact);
    return this.http.post(this.APIUrl, apiContact , httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${contact.firstName}`)),
      catchError(this.handleError<Contact>('updateHero'))
    );
  }

  private log (message: string){
    console.log(message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
