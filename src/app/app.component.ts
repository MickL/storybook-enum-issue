import { Component } from '@angular/core';
import { Animals } from './animals.enum';

@Component({
  selector: 'app-root',
  template: `
    <app-some-component [animal]="Animals.Cat"></app-some-component>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  Animals = Animals;
}
