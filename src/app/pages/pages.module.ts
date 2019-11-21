import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
import { MainComponent } from './main/main.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CoreModule } from '../core/core.module';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [AuthComponent, NotFoundComponent, TestComponent, MainComponent, ProductComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,
    FormsModule,
    NgZorroAntdModule,
    CoreModule,
  ],
  exports: [AuthComponent, NotFoundComponent, TestComponent, MainComponent],
})
export class PagesModule {}
