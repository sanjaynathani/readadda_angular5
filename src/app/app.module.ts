import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { AuthenticationModule } from './security/authentication.module';
import { Authentication } from './security/authentication';
import { AuthenticationService } from './security/authentication.service';
import { AuthGuard } from './security/authGuard';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header.component';
import { CenterComponent } from './layout/center.component';
import { EmailValidatorDirective } from './validator/emailValidator';
import { QuillEditorModule } from 'ngx-quill-editor';
import { MatToolbarModule, MatMenuModule } from '@angular/material';

export const firebaseConfig = {
  apiKey: 'AIzaSyBQ21jEZecwO82_OWgobWlFKIJczcEwnbE',
  authDomain: 'readadda-5d474.firebaseapp.com',
  databaseURL: 'https://readadda-5d474.firebaseio.com',
  projectId: 'readadda-5d474',
  storageBucket: 'readadda-5d474.appspot.com',
  messagingSenderId: '569031256946'
};

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    CenterComponent,
    EmailValidatorDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    QuillEditorModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [AuthGuard, Authentication, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
