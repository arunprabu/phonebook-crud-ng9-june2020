import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  // Step 1: Create a variable and make it a custom property
  @Input() age = 20; // @Input() will make age as custom property to the app-cpb selector

  constructor() { }

  ngOnInit(): void {
  }

}
