import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { Contact, FirestoreService } from '../firestore.service'
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms'

@Component({
  selector: 'app-contacts-create',
  templateUrl: './contacts-create.component.html',
  styleUrls: ['./contacts-create.component.css']
})
export class ContactsCreateComponent implements OnInit {
  contactsForm: FormGroup
  Name = ''
  Email = ''
  Phone = ''

  constructor(
    private router: Router,
    private fs: FirestoreService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.contactsForm = this.formBuilder.group({
      Name: [null, Validators.required],
      Email: [null, Validators.required],
      Phone: [null, Validators.required],
    })
  }

  onFormSubmit(form: any) {
    const contact = form as Contact
    console.log(contact)
    this.fs.postContact(contact).subscribe(
      id => {
        this.router.navigate(['/contacts-details', id])
      },
      err => {
        console.log(err)
      },
    )
  }
}