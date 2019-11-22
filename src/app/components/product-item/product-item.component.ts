import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../core/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent {
  @Input() product: Product;
  @Input() fullSize = false;
}
