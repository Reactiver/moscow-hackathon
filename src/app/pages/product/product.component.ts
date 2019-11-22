import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Observable, ReplaySubject } from 'rxjs';
import { Product, ProductService } from '../../core/services/product.service';
import { CommentsService } from '../../core/services/comments.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],
})
export class ProductComponent implements OnInit, OnDestroy {
  product$: Observable<Product>;
  private destroy = new ReplaySubject<void>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productService: ProductService,
    private commentsService: CommentsService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(takeUntil(this.destroy))
      .subscribe(params => this.getProduct(+params.get('id')));
  }
  private getProduct(id: number) {
    this.product$ = this.productService.getProductById(id);
  }

  ngOnDestroy(): void {
    this.destroy.next(null);
    this.destroy.complete();
  }

  like(comments, i: number) {
    const likedComments = comments[i].likes++;
    // this.commentsService.updateComments()
  }
}
