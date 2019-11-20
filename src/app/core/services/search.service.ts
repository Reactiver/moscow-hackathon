import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SearchService {
  categories = [
    'Популярное',
    'Бизнес',
    'Aвтомобили',
    'Медицина',
    'Мероприятия',
    'Музыка и аудио',
    'Новости и журналы',
    'Образование',
  ];
  private category = new BehaviorSubject<string>(this.categories[0]);
  readonly category$: Observable<string> = this.category.asObservable();

  setCategory(category: string): void {
    this.category.next(category);
  }
}
