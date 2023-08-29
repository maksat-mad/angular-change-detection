import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-a',
  template: `
    <button (click)="changeName()">Change name</button>
    <app-b [user]="user"></app-b>
    <h1>{{time}}</h1>
  `,
})
export class AComponent {
  // constructor(private cdRef: ChangeDetectorRef) {
  //   cdRef.detach();
  // }
  // Default change detection strategy means that a child component will always be checked
  // if its parent component is checked.
  // The only exception to that rule is that
  // if you detach a change detector of the child component like that

  user = { name: 'A' };
  time = Date.now();

  constructor() {
    setTimeout(() => { this.time = Date.now() }, 1000);
  }

  changeName() {
    // this.user.name = 'B';
    // OnPush it does not render

    this.user = {
      ...this.user,
      name: 'B',
    } // this one works fine with OnPush
  }
}
