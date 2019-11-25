import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestService } from './request.service';
import { Comment } from './comments.service';

export interface Product {
  category: string;
  comments: Comment[];
  description: string;
  file: any;
  itemId: string;
  name: string;
  ownerId: string;
  price: number;
  rating: number;
}

@Injectable()
export class ProductService {
  constructor(private readonly request: RequestService) {}

  getProductById(id: string): Observable<Product> {
    return this.getProducts().pipe(
      map(products => {
        const [product] = products.filter(item => item.itemId === id);
        return product;
      })
    );
  }

  getProducts(): Observable<Product[]> {
    return this.request.get<Product[]>('items').pipe();
  }
}
