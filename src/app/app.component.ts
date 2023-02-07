import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    // Fixes the issue
    /*window.addEventListener('resize', () => {
        window.dispatchEvent(new Event('appload'));
    })*/
  }

}