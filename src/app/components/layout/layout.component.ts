import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoryService } from '../../core/services/category.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  constructor(public categoryService: CategoryService) {}
}
