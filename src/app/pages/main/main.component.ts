import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzMarks } from 'ng-zorro-antd';
import { CategoryService } from '../../core/services/category.service';
import { ProductService } from '../../core/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';

type SortType = 'price' | 'rate' | 'feedback' | null;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
export class MainComponent implements OnInit, OnDestroy {
  category: string;
  radioValue: any;
  price = [100, 1000];
  params: any;
  marks: NzMarks = {
    100: '100 ₽',
    1000: {
      style: {
        'min-width': 'max-content',
      },
      label: '1000 ₽',
    },
  };

  sortType: SortType = null;
  priceType: 'up' | 'down' = 'up';
  private destroy = new ReplaySubject<void>();

  constructor(
    public readonly productService: ProductService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(takeUntil(this.destroy)).subscribe(params => {
      this.category = params.get('category');
    });
    // this.productService.getItems().subscribe(console.log);
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }

  sortBy(type: SortType) {
    this.sortType = type;

    if (this.sortType === 'price') {
      this.priceType = this.priceType === 'up' ? 'down' : 'up';
    }
  }
}
