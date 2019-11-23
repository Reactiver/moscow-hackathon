import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../core/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.less'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ProductItemComponent {
  @Input() product: Product;
  @Input() fullSize = false;
  isVisible = false;
  handleCancel() {
    console.log('cancel');
    this.isVisible = false;
  }

  handleOk() {
    console.log('ok');
    this.isVisible = false;
  }
}
