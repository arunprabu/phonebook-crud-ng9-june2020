import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: [
  ]
})
export class ContactDetailsComponent implements OnInit {

  contactData: any;

  constructor( private contactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // read url parameters in angular 8
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    // ideal place for ajax calls

    // 1 . connect to the service -- ref constructor
    // 2. hit the service method with the contactId
    this.contactService.getContactById(id)
      .subscribe( (res: any) => { // 3. get the resp from service
        console.log(res);
        this.contactData = res;
      })

    
  }

}
