import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Product } from '../../core/services/product.service';
import { UserService } from '../../core/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.less'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Input() fullSize = false;
  isVisible = false;
  ownerName$: Observable<string>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getOwnerName();
  }

  private getOwnerName() {
    this.ownerName$ = this.userService.getUserName(this.product.ownerId);
  }

  handleCancel() {
    console.log('cancel');
    this.isVisible = false;
  }

  handleOk() {
    console.log('ok');
    this.isVisible = false;
  }
}
