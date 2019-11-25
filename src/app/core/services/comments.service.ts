import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

@Injectable()
export class CommentsService {
  private store = new BehaviorSubject<Comment[]>([]);
  state$ = this.store.asObservable();

  constructor() {}

  addComment(comment: Comment) {
    this.store.next([...this.store.value, comment]);
  }
}
