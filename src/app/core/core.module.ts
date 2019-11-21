import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from './services/search.service';
import { ProductService } from './services/product.service';
import { RussianCurrencyPipe } from './pipes/russian-currency.pipe';
import { CommentsPipe } from './pipes/comments.pipe';

@NgModule({
  declarations: [RussianCurrencyPipe, CommentsPipe],
  imports: [CommonModule],
  exports: [RussianCurrencyPipe, CommentsPipe],
  providers: [SearchService, ProductService],
})
export class CoreModule {}
