import { Injectable } from '@angular/core';

import {Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface Contact {
  id?: string
  Phone: string
  Email: string
  Name: string
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
    private contactCollection: AngularFirestoreCollection<Contact>

    constructor(private afs: AngularFirestore) {
      this.contactCollection = afs.collection<Contact>('contacts')
    }

  getContacts(): Observable<Contact[]> {
    return this.contactCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id
          return { id, ...data }
        }),
        ),
    )
  }

  getContact(id: string): Observable<any> {
    return this.contactCollection.doc(id).valueChanges()
  }

  postContact(contact: Contact) {
    return from(this.contactCollection.add(contact).then(data => data.id))
  }

  updateContacts(id: string, contact: Contact) {
    const doc = this.contactCollection.doc(id)
    return from(doc.update(contact))
  }

  deleteContacts(id:string) {
    const doc = this.contactCollection.doc(id)
    return from(doc.delete())
  }
}
