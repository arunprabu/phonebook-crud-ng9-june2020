import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from '../shared/services/profile-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  today = new Date();

  appName = 'Phone Book!';

  // Todo: Custom Pipe
  // ng g p shared/pipes/ellipsis
  // Ref: https://github.com/arunprabu/contact-manager-tefeb2020/blob/master/src/app/shared/pipes/ellipsis.pipe.ts
  // also ref: https://github.com/arunprabu/contact-manager-tefeb2020/blob/master/src/app/about/about.component.html

  profileName;

  constructor( private profileDataService: ProfileDataService) { }

  ngOnInit(): void {
    // Step 3 in Any to Any comp commn
    // Step 4 in Any to Any comp commn -- ref header.comp.ts 
    this.profileDataService.latestProfileName.subscribe( (name: string) => {
      console.log(name);
      this.profileName = name;
    });
  }

  updateProfileHandler(){
    // Step 5 in Any to Any comp commn
    console.log('inside updateProfileHandler');
    this.profileDataService.updateProfile(this.profileName);
  }

}
