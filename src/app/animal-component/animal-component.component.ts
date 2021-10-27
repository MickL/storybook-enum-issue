import { Component, Input, OnInit } from '@angular/core';
import { Animals } from '../animals.enum';

@Component({
    selector: 'app-some-component',
    template: `
                  Selected animal: 
                  <ng-container [ngSwitch]="animal">
                      <ng-container *ngSwitchCase="Animals.Cat">Cat</ng-container>
                      <ng-container *ngSwitchCase="Animals.Dog">Dog</ng-container>
                      <ng-container *ngSwitchCase="Animals.Mouse">Mouse</ng-container>
                      <ng-container *ngSwitchDefault>NONE</ng-container>
                  </ng-container>
              `,
    styles:   []
})
export class AnimalComponentComponent implements OnInit {
    @Input() animal?: Animals;
    Animals = Animals;

    constructor() {
    }

    ngOnInit(): void {
    }

}
