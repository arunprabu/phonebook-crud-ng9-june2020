import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Decorator
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private REST_API_URL = 'http://jsonplaceholder.typicode.com/users';

  constructor( private http: HttpClient ) { }

  createContact( contactData ){ // 1. get the data from comp
    console.log('Inside Service');
    console.log(contactData);

    // 2. send the data to REST API
        // 2.1 identify the REST API endpoint 'http://jsonplaceholder.typicode.com/users'
        // 2.2 what's the HTTP method? POST
        // 2.3 use REST API Client to connect to the rest api end point -- HttpClient

    return this.http.post(this.REST_API_URL, contactData)
        .pipe( map( (res: any) => {  // 3. get the Response from REST API
          console.log(res);
          // 4. Send the Response to the component
          return res;
        }));

  }

  getContacts(){ // 1. get the req from comp

    // 2. send the req to the REST api -- with get method using HttpClient
    return this.http.get(this.REST_API_URL)
      .pipe( map ((res: any[]) => { // 3. get the resp from the REST API 
        console.log(res);
        return res; // 4. send it back to the comp
      }));
  }

}
