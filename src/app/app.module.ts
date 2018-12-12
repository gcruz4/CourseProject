import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsCreateComponent } from './contacts-create/contacts-create.component';
import { ContactsEditComponent } from './contacts-edit/contacts-edit.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent,
    data: { title: 'Contacts List' },
  },
  {
    path: 'contacts-detail/:id',
    component: ContactsDetailComponent,
    data: { title: 'Contacts Details' },
  },
  {
    path: 'contacts-create',
    component: ContactsCreateComponent,
    data: { title: 'Create Contacts' },
  },
  {
    path: 'contacts-edit/:id',
    component: ContactsEditComponent,
    data: {title: 'Edit Boards' },
  },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactsDetailComponent,
    ContactsCreateComponent,
    ContactsEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSortModule,
    MatFormFieldModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
