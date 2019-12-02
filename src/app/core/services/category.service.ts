import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RequestService } from './request.service';

export interface Category {
  id: number;
  name: string;
}

let state = {
  id: 0,
  name: '',
};

@Injectable()
export class CategoryService {
  private currentCategory = new BehaviorSubject<Category>(state);
  category$ = this.currentCategory.asObservable();

  constructor(private request: RequestService) {}

  getCategories(): Observable<Category[]> {
    return this.request.get<Category[]>('items/categories');
  }

  updateCategory(newState: Category) {
    state = newState;
    this.currentCategory.next(state);
  }
}
