import { Component } from '@angular/core'; // node_modules import

// Decorator
@Component({
  selector: 'app-root', // exposed in a selector -- mandatory and element selector is recommended
  templateUrl: './app.component.html',  // html -- mandatory and it should be only one
  styleUrls: ['./app.component.css'] // css -- optional and can be multiple
})
export class AppComponent {
  // ts
  title = 'Phone Book!!';

  add(a, b){
    return a + b;
  }
}
