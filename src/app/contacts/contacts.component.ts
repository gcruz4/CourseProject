import { Component, OnInit } from '@angular/core';

import { DataSource } from '@angular/cdk/collections'
import { FirestoreService } from '../firestore.service'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {
  displayColumns = ['Name', 'Email', 'Phone']
  dataSource = new ContactDataSource(this.fs)


  constructor(private fs: FirestoreService) { }

  ngOnInit() {}
  }

  export class ContactDataSource extends DataSource<any> {
    constructor(private fs: FirestoreService) {
      super()
    }

    connect() {
      return this.fs.getContacts()
    }

    disconnect() {}
  

}
