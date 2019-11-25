import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RequestService } from './request.service';
import { ProductService } from './product.service';
import { UserService } from './user.service';
import {concatMap, mergeMap, mergeMapTo, switchMap, switchMapTo, withLatestFrom} from 'rxjs/operators';

export interface Comment {
  authorId: string;
  commentId: string;
  content: string;
  date: string;
  image: any;
  itemId: string;
  likes: number;
  name: string;
  rating: number;
}

export interface NormalizedComment extends Comment {
  authorName;
}

@Injectable()
export class CommentsService {
  constructor(
    private readonly request: RequestService,
    private readonly product: ProductService,
    private readonly user: UserService
  ) {}

  getCommentByCommentId(id: string): Observable<Comment> {
    return this.request.get<Comment>(`comments/${id}`);
  }
}
