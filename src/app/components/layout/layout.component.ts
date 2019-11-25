import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CategoryService } from '../../core/services/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  categories$: Observable<string[]>;
  constructor(public categoryService: CategoryService) {}

  ngOnInit() {
    this.getCategories();
  }

  private getCategories() {
    this.categories$ = this.categoryService.getCategories();
  }
}
