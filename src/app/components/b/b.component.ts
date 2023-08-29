import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-b',
  template: `<span>User name: {{user.name}}</span>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BComponent {
  @Input() user: any;
  // previousUserName = '';

  // constructor(private cd: ChangeDetectorRef) {}

  // ngDoCheck() {
  //   console.log('ngDoCheck');
  //   if (this.user.name !== this.previousUserName) {
  //     this.cd.markForCheck();
  //     this.previousUserName = this.user.name;
  //   }
  // }
  // using ngDoCheck we can check user name and mark component dirty
}
