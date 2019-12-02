import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Category, CategoryService } from '../../core/services/category.service';
import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  categories$: Observable<Category[]> = this.categoryService.getCategories();
  items$: Observable<string[]>;
  productName = new FormControl('');

  constructor(public categoryService: CategoryService) {}

  ngOnInit() {
    this.getItems();
  }

  private getItems() {
    this.items$ = this.productName.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(value => of([value, value + value]))
    );
  }
}
