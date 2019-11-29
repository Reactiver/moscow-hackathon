import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CategoryService } from '../../core/services/category.service';
import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  categories$: Observable<string[]>;
  items$: Observable<string[]>;
  productName = new FormControl('');

  constructor(public categoryService: CategoryService, private productService: ProductService) {}

  ngOnInit() {
    this.getCategories();
    this.getItems();
  }

  private getItems() {
    this.items$ = this.productName.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(value => of([value, value + value]))
    );
  }

  private getCategories() {
    this.categories$ = this.categoryService.getCategories();
  }
}
