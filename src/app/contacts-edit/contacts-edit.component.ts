import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact, FirestoreService } from '../firestore.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts-edit',
  templateUrl: './contacts-edit.component.html',
  styleUrls: ['./contacts-edit.component.css']
})
export class ContactsEditComponent implements OnInit {
  contactsForm: FormGroup
  id = ''
  Name = ''
  Email = ''
  Phone = ''

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fs: FirestoreService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.getContact(this.route.snapshot.params['id'])
    this.contactsForm = this.formBuilder.group({
      Name: [null, Validators.required],
      Email: [null, Validators.required],
      Phone: [null, Validators.required],
    })
  }

  getContact(id) {
    this.fs.getContact(id).subscribe(data => {
      this.id = id
      this.contactsForm.setValue({
        Name: data.Name,
        Email: data.Email,
        Phone: data.Phone,
      })
    })
  }

  onFormSubmit(form: any) {
    const contact: Contact = form
    this.fs.updateContacts(this.id, contact).subscribe(
      res => {
        this.router.navigate(['/contacts'])
      },
      err => {
        console.log(err)
      },
    )
  }

  contactDetails() {
    this.router.navigate(['/contacts-detail', this.id])
  }
}
