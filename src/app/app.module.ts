import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { ContactService } from './services/contact.service'

import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HeaderComponent } from './components/blocks/header/header.component';
import { ToDosComponent } from './components/blocks/to-dos/to-dos.component';
import { DocComponent } from './components/blocks/doc/doc.component';
import { ContactAddressComponent } from './components/contact-address/contact-address.component';
import { ApiContactPipe } from './pipes/api-contact.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    HeaderComponent,
    ToDosComponent,
    DocComponent,
    ContactAddressComponent,
    ApiContactPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContactService, ApiContactPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
