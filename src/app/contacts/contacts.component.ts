import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit {

  contactList: Contact[];

  constructor( private contactService: ContactService) {
    console.log('Inside constructor');
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    // ideal place for making ajax calls
    // 1. connect to the service -- ref constructor
    // 2. send a call to the service method
    this.contactService.getContacts()
      .subscribe( (res: Contact[]) => { // 3. get the resp from the service
        console.log(res);
        this.contactList = res;
      });
  }

}
