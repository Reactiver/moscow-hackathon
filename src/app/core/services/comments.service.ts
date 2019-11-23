import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Comment {
  author: string;
  content: string;
  avatar: string;
  likes: number;
  time: string;
}

const comments: Comment[] = [
  {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content:
      'We supply a series of design principles, ' +
      'practical patterns and high quality design resources' +
      '(Sketch and Axure), to help people create their ' +
      'product prototypes beautifully and efficiently.',
    likes: 4,
    time: '21 ноября 2019',
  },
  {
    author: 'Davidich',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content:
      'We supply a series of design principles, ' +
      'practical patterns and high quality design resources' +
      '(Sketch and Axure), to help people create their ' +
      'product prototypes beautifully and efficiently.',
    likes: 2,
    time: '22 ноября 2019',
  },
];

@Injectable()
export class CommentsService {
  private store = new BehaviorSubject<Comment[]>([...comments]);
  state$ = this.store.asObservable();

  constructor() {}

  addComment(comment: Comment) {
    this.store.next([...this.store.value, comment]);
  }

  // tslint:disable-next-line:no-shadowed-variable
  updateComments(comments: Comment[]) {
    this.store.next(comments);
  }
}
