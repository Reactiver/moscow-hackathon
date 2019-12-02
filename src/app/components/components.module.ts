import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CoreModule } from '../core/core.module';
import { NgPaymentCardModule } from 'ng-payment-card';
import { ModalPaymentComponent } from './modal-payment/modal-payment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [LayoutComponent, ModalPaymentComponent, CardComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule,
    CoreModule,
    NgPaymentCardModule,
    ReactiveFormsModule,
  ],
  exports: [LayoutComponent, CardComponent],
})
export class ComponentsModule {}
