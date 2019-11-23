import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../core/services/product.service';
import { ICardDetails } from 'ng-payment-card/lib/domain/i-card-details';

enum PaymentStep {
  bankCard,
  processing,
  success,
  failed,
}

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
  paymentStep = PaymentStep;
  currentPaymentStep = PaymentStep.bankCard;

  handleCancel() {
    console.log('cancel');
    this.isVisible = false;
  }

  handleOk() {
    console.log('ok');
    this.isVisible = false;
  }

  processPayment(cardData: ICardDetails) {
    console.log(cardData);
    this.currentPaymentStep = PaymentStep.processing;
    setTimeout(() => {
      this.currentPaymentStep = PaymentStep.success;
    }, 2000);
  }
}
