import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.less'],
})
export class NotFoundComponent {
  constructor(private router: Router) {}

  public goHome(): void {
    this.router.navigate(['']);
  }
}