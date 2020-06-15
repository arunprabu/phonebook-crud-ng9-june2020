import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {
  
  // Step 1: create an obj for EventEmitter class and make it custom event
  @Output() profileLoaded = new EventEmitter(); // @Output() will make it a custom event to the selector 'app-ceb'

  constructor() {
    console.log('2. Inside constructor of CEB');
  }

  // lifecycle hooks
  ngOnInit(): void {
    console.log('4. Inside ngOnInit of CEB');
  }

  sendToParent(){
    // Step 2: Use Emit method to trigger the custom event
    this.profileLoaded.emit('Arun');
  }
}
