import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RequestService } from './request.service';
import { first } from 'rxjs/operators';

@Injectable()
export class CategoryService {
  constructor(private request: RequestService) {}

  getCategories(): Observable<string[]> {
    return this.request.get<string[]>('items/categories');
  }
}
