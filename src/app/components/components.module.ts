import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [LayoutComponent, ProductComponent],
  imports: [CommonModule, RouterModule, NgZorroAntdModule],
  exports: [LayoutComponent, ProductComponent],
})
export class ComponentsModule {}
