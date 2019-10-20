import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {ComponentsModule} from '../components/components.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AuthComponent, NotFoundComponent, TestComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, ComponentsModule],
})
export class PagesModule {}
