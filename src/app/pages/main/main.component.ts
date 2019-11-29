import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzMarks } from 'ng-zorro-antd';
import { OrderByPrice, Product, ProductService } from '../../core/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Observable, ReplaySubject } from 'rxjs';
import { LoaderService } from '../../core/services/loader.service';

type SortType = 'price' | 'rate' | 'feedback' | null;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
export class MainComponent implements OnInit, OnDestroy {
  category: string;
  minRating = 0;
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
  products$: Observable<Product[]>;

  constructor(
    private loaderService: LoaderService,
    public readonly productService: ProductService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(takeUntil(this.destroy)).subscribe(params => {
      this.category = params.get('category');
      this.getProducts(this.category);
      console.log('get category');
    });
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }

  sortBy(type: SortType) {
    this.sortType = type;

    if (this.sortType === 'price') {
      this.priceType = this.priceType === 'up' ? 'down' : 'up';
      const orderByPrice: OrderByPrice = this.priceType === 'up' ? 'ASCENDING' : 'DESCENDING';
      this.getProducts(this.category, orderByPrice, this.minRating);
    }
  }

  private getProducts(category?: string, orderByPrice?: OrderByPrice, minRating?: number) {
    this.products$ = this.productService.updateProducts(category, orderByPrice, minRating);
  }

  updateRating() {
    console.log(this.minRating);
  }
}
