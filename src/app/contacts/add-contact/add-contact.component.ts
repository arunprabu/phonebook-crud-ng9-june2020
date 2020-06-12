import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  // Step 1: Create Form tag equivalent in TS file
  contactForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    // Step 1.. continues...
    this.contactForm = new FormGroup({
      // Step 2: Create form elements equivalent in TS file
      name: new FormControl('', Validators.required),  // Step 5: Work with validators 
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
    // Step 3: ref html
  }

  addContactHandler(){
    console.log(this.contactForm);
  }

}
