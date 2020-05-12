import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularFireDatabaseModule} from '@angular/fire/database';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FormsModule } from '@angular/forms';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
var config = {
  apiKey: "AIzaSyA7361IcNiV7kkEP7cpiJX2ioKk7uh2DO4",
  authDomain: "appauth-aaf49.firebaseapp.com",
  databaseURL: "https://appauth-aaf49.firebaseio.com",
  projectId: "appauth-aaf49",
  storageBucket: "appauth-aaf49.appspot.com",
  messagingSenderId: "814573180286",
  appId: "1:814573180286:web:961c288fbf516593018f2f",
  measurementId: "G-G11X3SPQ0V"
};
@NgModule({
  declarations: [
    AppComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ListUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    FormsModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
