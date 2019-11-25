import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, map, pluck, switchMap, takeUntil, toArray } from 'rxjs/operators';
import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { Product, ProductService } from '../../core/services/product.service';
import { CommentsService, NormalizedComment, Comment } from '../../core/services/comments.service';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],
})
export class ProductComponent implements OnInit, OnDestroy {
  product$: Observable<Product>;
  comments$: Observable<NormalizedComment[]>;
  private destroy = new ReplaySubject<void>();
  myComment = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productService: ProductService,
    public commentsService: CommentsService,
    public userService: UserService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(takeUntil(this.destroy))
      .subscribe(params => this.getProduct(params.get('id')));
  }

  private getProduct(id: string) {
    this.product$ = this.productService.getProductById(id);
    this.getNormalizedComments();
  }

  private getNormalizedComments() {
    const comments$ = this.product$.pipe(pluck('comments'));

    this.comments$ = combineLatest(
      comments$,
      comments$.pipe(
        switchMap(comments => comments),
        concatMap(comment => this.userService.getUserName(comment.authorId)),
        toArray()
      )
    ).pipe(
      map(([comments, authors]) => {
        return comments.map((item: Comment, index) => {
          return { ...item, authorName: authors[index] };
        });
      }),
      takeUntil(this.destroy)
    );
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
