import { Component, OnInit } from '@angular/core';

// ng g c footer -it -is
@Component({
  selector: 'app-footer',
  template: `
    <div class="text-center">
      <hr>
      <app-menu>
        <li class="nav-item">
          <a class="nav-link" href="#">Back to top</a>
        </li>
      </app-menu>
      <p>Copyright &copy; 2020 | Hexaware </p>
    </div>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
