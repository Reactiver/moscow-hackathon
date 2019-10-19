import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, ReactiveFormsModule, NgZorroAntdModule],
})
export class PagesModule {}
