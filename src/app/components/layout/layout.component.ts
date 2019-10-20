import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  isCollapsed = false;

  constructor(private router: Router, private location: Location) {}
  onBack() {
    this.location.back();
  }

  logout() {
    this.router.navigate(['/auth']);
  }
}
