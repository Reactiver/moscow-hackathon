import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { RussianCurrencyPipe } from './pipes/russian-currency.pipe';
import { CommentsPipe } from './pipes/comments.pipe';
import { FirstUpPipe } from './pipes/first-up.pipe';
import { CommentsService } from './services/comments.service';
import { UserService } from './services/user.service';
import { LoaderService } from './services/loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader.interceptor';

@NgModule({
  declarations: [RussianCurrencyPipe, CommentsPipe, FirstUpPipe],
  imports: [CommonModule],
  exports: [RussianCurrencyPipe, CommentsPipe, FirstUpPipe],
  providers: [
    CategoryService,
    ProductService,
    CommentsService,
    UserService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
})
export class CoreModule {}
