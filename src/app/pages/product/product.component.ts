import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],
})
export class ProductComponent implements OnInit, OnDestroy {
  private id: number;
  private destroy = new ReplaySubject<void>();
  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.pipe(takeUntil(this.destroy)).subscribe(params => {
      this.id = +params.get('id');
    });
  }

  ngOnDestroy(): void {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
