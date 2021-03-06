import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    `
      
      .boxStyleLogin{
        border: dashed 4px blue;
        background: green;
      }

      .boxStyleLogout{
        border: dashed 4px red;
        background: yellow;
      }
    `
  ]
})

export class ConceptsComponent implements OnInit, AfterViewInit, OnDestroy {
  // ts
  // public variable
  // string interpolation related
  appName = 'Phone Book App!';
  avgExp = 3;
  isLoggedIn = false;
  skillsList: string[] = [ 'html', 'css', 'ts', 'ng'];

  // property binding related
  companyName = 'Hexaware';

  // two way binding related
  courseName = 'Angular';

  // for receiving custom event binding data
  profileName = '';

  constructor() {
    console.log('1. Inside Concept\'s Constructor' );
  }

  ngOnInit(): void {
    console.log('3. Inside Concept\'s ngOnInit' );
  }

  ngAfterViewInit(){
    console.log('5. Inside Concept\'s ngAfterViewInit');
  }

  // string interpolation related
  getAppName(){
    return this.appName;
  }

  // event binding related
  btnClickHandler(e){
    console.log(e);
    alert('clicked');
  }

  // Step 4 of CEB -- define the handler
  profileLoadedHandler( e: any){
    console.log('profile loaded works', e);
    this.profileName = e;  // making a change in the view of the Parent Comp
  }

  isAuth(){
    return this.isLoggedIn;
  }

  ngOnDestroy(){
    console.log('Inside ngOnDestroy');
    // ideal lifecycle hook for clearing the data, remove the intervals, clear timer
    // ideal place unsubscribing ajax calls
    this.skillsList.length = 0;
  }
}
