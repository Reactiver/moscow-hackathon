import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { RussianCurrencyPipe } from './pipes/russian-currency.pipe';
import { CommentsPipe } from './pipes/comments.pipe';
import { FirstUpPipe } from './pipes/first-up.pipe';

@NgModule({
  declarations: [RussianCurrencyPipe, CommentsPipe, FirstUpPipe],
  imports: [CommonModule],
  exports: [RussianCurrencyPipe, CommentsPipe, FirstUpPipe],
  providers: [CategoryService, ProductService],
})
export class CoreModule {}
