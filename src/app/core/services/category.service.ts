import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CategoryService {
  categories = [
    '',
    'популярное',
    'бизнес',
    'автомобили',
    'медицина',
    'мероприятия',
    'музыка и аудио',
    'новости и журналы',
    'образование',
  ];
  private category = new BehaviorSubject<string>(this.categories[0]);
  readonly category$: Observable<string> = this.category.asObservable();

  setCategory(category: string): void {
    this.category.next(category);
  }
}
