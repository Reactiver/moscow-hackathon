import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {ComponentsModule} from '../components/components.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [AuthComponent, NotFoundComponent, TestComponent, MainComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, ComponentsModule, FormsModule],
})
export class PagesModule {}
