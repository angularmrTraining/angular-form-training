import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HeaderComponent } from './components/blocks/header/header.component';
import { ToDosComponent } from './components/blocks/to-dos/to-dos.component';
import { DocComponent } from './components/blocks/doc/doc.component';
import { AdressComponent } from './components/adress/adress.component';

import { ContactService } from './services/contact.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    HeaderComponent,
    ToDosComponent,
    DocComponent,
    AdressComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

  // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
  // and returns simulated server responses.
  // Remove it when a real server is ready to receive requests.
  HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
  )
  ],
  providers: [ ContactService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
