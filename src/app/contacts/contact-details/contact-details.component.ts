import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';

declare var $: any; // using jquery in angular component

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: [
  ]
})
export class ContactDetailsComponent implements OnInit {

  contactData: any;
  duplicateContactData: any;
  isUpdated: boolean;

  constructor( private contactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // read url parameters in angular 8
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    // ideal place for ajax calls

    // 1 . connect to the service -- ref constructor
    // 2. hit the service method with the contactId
    this.contactService.getContactById(id)
      .subscribe( (res: Contact) => { // 3. get the resp from service
        console.log(res);
        this.contactData = res;
      });
  }

  onEditModalOpen(){
    this.isUpdated = false;
    this.duplicateContactData = JSON.parse(JSON.stringify(this.contactData));
  }

  updateContactHandler(){
    console.log(this.duplicateContactData);
    this.contactService.updateContact(this.duplicateContactData)
      .subscribe( (res: Contact) => { // 3. get the resp from service
        console.log(res);
        // if /else
        this.isUpdated = true;
        setTimeout( () => {
          $('#editContactModal').modal('hide');
          this.contactData = res;
        }, 4000);
      });
  }

  async deleteContactHandler(id){
    console.log(id);

    let result = await this.contactService.deleteContact(id);
    console.log(result);

  }
}
