import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Item {
  itemId: number;
  imageUrl: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  getItem(id: string): Observable<Item> {
    return of({
      itemId: 6,
      imageUrl: 'https://marketplace-assets.digitalocean.com/logos/gitlab-ee-logo.svg',
      title: 'GitLab Enterpise Edition',
      description: 'version 12.4.3',
    });
  }
}
