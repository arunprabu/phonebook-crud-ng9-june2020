import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from '../../services/profile-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', // html
  styleUrls: ['./header.component.css']   // css
})
export class HeaderComponent implements OnInit {
  // ts

  profileName;

  constructor(private profileDataService: ProfileDataService) { }

  ngOnInit(): void {
    this.profileDataService.latestProfileName.subscribe( (name: string) => {
      console.log(name);
      this.profileName = name;
    });
  }

}
