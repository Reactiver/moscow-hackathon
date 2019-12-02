import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICardDetails } from 'ng-payment-card/lib/domain/i-card-details';

enum PaymentStep {
  bankCard,
  processing,
  success,
  failed,
}
@Component({
  selector: 'app-modal-payment',
  templateUrl: './modal-payment.component.html',
  styleUrls: ['./modal-payment.component.less'],
})
export class ModalPaymentComponent {
  @Input() visible = false;
  @Output() cancel = new EventEmitter();
  @Output() ok = new EventEmitter();

  paymentStep = PaymentStep;
  currentPaymentStep = PaymentStep.bankCard;

  processPayment(cardData: ICardDetails) {
    console.log(cardData);
    this.currentPaymentStep = PaymentStep.processing;
    setTimeout(() => {
      this.currentPaymentStep = PaymentStep.success;
    }, 2000);
  }

  handleCancel() {
    this.cancel.emit();
  }

  handleOk() {
    this.ok.emit();
  }
}
