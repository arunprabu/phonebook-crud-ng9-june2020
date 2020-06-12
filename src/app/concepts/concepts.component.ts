import { Component, OnInit } from '@angular/core';

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

export class ConceptsComponent implements OnInit {
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
    
  }

  ngOnInit(): void {
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
    this.profileName = e;
  }

  isAuth(){
    return this.isLoggedIn;
  }
}
