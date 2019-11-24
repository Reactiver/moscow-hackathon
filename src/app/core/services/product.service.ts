import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestService } from './request.service';

export interface Product {
  id: number;
  title: string;
  info: string;
  rating: number;
  comments: number;
  imageUrl: string;
  price: number;
  author: string;
}

const mockProduct = [
  {
    id: 1,
    title: 'Instagram',
    info:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
      'Accusantium consequatur dolorum esse eveniet ex, expedita harum ' +
      'impedit inventore iure laborum porro quae quam qui quibusdam quis ' +
      'reprehenderit sed tempora tempore!',
    rating: 4.5,
    comments: 423,
    imageUrl: 'https://placehold.it/120x120',
    price: 51342,
    author: 'Sonic Studio',
  },
  {
    id: 2,
    title: 'Антивирус',
    info:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
      'Accusantium consequatur dolorum esse eveniet ex, expedita harum ' +
      'impedit inventore iure laborum porro quae quam qui quibusdam quis ' +
      'reprehenderit sed tempora tempore!',
    rating: 4.8,
    comments: 11,
    imageUrl: 'https://placehold.it/120x120',
    price: 1234,
    author: 'Reactive LTD',
  },
  {
    id: 3,
    title: 'Админка',
    info:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
      'Accusantium consequatur dolorum esse eveniet ex, expedita harum ',
    rating: 3.2,
    comments: 7,
    imageUrl: 'https://placehold.it/120x120',
    price: 3228,
    author: 'Test Corp',
  },
];

@Injectable()
export class ProductService {
  private products = new BehaviorSubject<Product[]>(mockProduct);
  public products$ = this.products.asObservable();

  constructor(private readonly request: RequestService) {}

  setProducts(products: Product[]) {
    this.products.next(products);
  }

  getProductById(id: number): Observable<Product> {
    return this.products$.pipe(
      map(products => {
        const [product] = products.filter(item => item.id === id);
        return product;
      })
    );
  }

  getItems(): Observable<any> {
    return this.request.get('items');
  }
}
