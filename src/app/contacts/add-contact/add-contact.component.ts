import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  // Step 1: Create Form tag equivalent in TS file
  contactForm: FormGroup;

  isSaved: boolean;

  constructor( private contactService: ContactService) { }

  ngOnInit(): void {
    // Step 1.. continues...
    this.contactForm = new FormGroup({
      // Step 2: Create form elements equivalent in TS file
      first_name: new FormControl('arun', Validators.required),  // Step 5: Work with validators
      last_name: new FormControl('123456', Validators.required),
      email: new FormControl('a@b.com', [Validators.required, Validators.email])
    });
    // Step 3: ref html
  }

  addContactHandler(){
    // 1. get the html form data
    console.log(this.contactForm.value);
    // 2. send the form data to service
    // 2.1 connect to the service using dep injection -- ref constructor
    // 2.2 send the data to the service's method
    this.contactService.createContact(this.contactForm.value)
      .subscribe( ( res: Contact) => { // 3. get the resp from service
        console.log(res);
        if (res && res.id) {
          this.isSaved = true;
        }
      });

  }

}
