import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  private profileName = 'Arun';

  // Step 1: Create BehaviourSubject with default value
  private myProfile = new BehaviorSubject<string>(this.profileName);

  // Step 2: Create Observable for the above BehaviourSubject
  // any component can subscribe to the observable
  latestProfileName: Observable<string> = this.myProfile.asObservable();

  constructor() { }

  // work on service method to update the profilename 
  // Step 6in Any to Any comp commn
  updateProfile(newProfile){
    console.log(newProfile);
    this.myProfile.next(newProfile);
  }
}
