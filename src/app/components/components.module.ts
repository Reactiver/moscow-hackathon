import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ProductItemComponent } from './product-item/product-item.component';
import {CoreModule} from "../core/core.module";

@NgModule({
  declarations: [LayoutComponent, ProductItemComponent],
  imports: [CommonModule, RouterModule, NgZorroAntdModule, CoreModule],
  exports: [LayoutComponent, ProductItemComponent],
})
export class ComponentsModule {}
