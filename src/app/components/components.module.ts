import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ProductItemComponent } from './product-item/product-item.component';
import {CoreModule} from "../core/core.module";
import {NgPaymentCardModule} from "ng-payment-card";
import { ModalPaymentComponent } from './modal-payment/modal-payment.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [LayoutComponent, ProductItemComponent, ModalPaymentComponent],
    imports: [CommonModule, RouterModule, NgZorroAntdModule, CoreModule, NgPaymentCardModule, ReactiveFormsModule],
  exports: [LayoutComponent, ProductItemComponent],
})
export class ComponentsModule {}