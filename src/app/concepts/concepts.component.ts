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
  isLoggedIn = true;
  skillsList: string[] = [ 'html', 'css', 'ts', 'ng'];

  // property binding related
  companyName = 'Hexaware';

  constructor() {
    
  }

  ngOnInit(): void {
  }

  getAppName(){
    return this.appName;
  }

  btnClickHandler(e){
    console.log(e);
    alert('clicked');
  }
}
