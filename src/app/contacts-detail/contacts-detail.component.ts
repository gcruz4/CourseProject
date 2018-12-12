import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  id: string
  contact: any

  constructor(private route: ActivatedRoute, private router: Router, private fs: FirestoreService) {
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.getContactDetails()
  }

  private getContactDetails() {
    this.fs.getContact(this.id).subscribe(contact => {
      console.log(contact)
      this.contact = contact
    })
  }

  deleteContact(id) {
    this.fs.deleteContacts(id).subscribe(
      _ => {
        this.router.navigate(['/contacts'])
      },
      err => {
        console.log(err)
      },
    )
  }
}
