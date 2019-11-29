import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';
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

export type OrderByPrice = 'ASCENDING' | 'DESCENDING';

interface ProductState {
  products: Product[];
  productName: string;
  minRating: number;
}

const state: ProductState = {
  products: [],
  productName: '',
  minRating: 0,
};

@Injectable()
export class ProductService {
  // private productStore = new BehaviorSubject<ProductState>(state);
  // private productState$ = this.productStore.asObservable();
  //
  // products$ = this.productState$.pipe(
  //   map(productState => productState.products),
  //   distinctUntilChanged()
  // );
  // productName$ = this.productState$.pipe(
  //   map(productState => productState.productName),
  //   distinctUntilChanged()
  // );

  constructor(private readonly request: RequestService) {}

  getProductById(id: string): Observable<Product> {
    return this.updateProducts().pipe(
      map(products => {
        const [product] = products.filter(item => item.itemId === id);
        return product;
      })
    );
  }

  updateProducts(
    category?: string,
    orderByPrice?: OrderByPrice,
    minRating?: number
  ): Observable<Product[]> {
    let queryParams = '';
    queryParams += !!category ? `?category=${category}` : '';
    queryParams += !!orderByPrice ? `&orderByPrice=${orderByPrice}` : '';
    queryParams += !!minRating ? `&minRating=${minRating}` : '';

    return this.request
      .get<Product[]>(`items${queryParams}`)
      .pipe
      // tap(items => this.updateState(items))
      ();
  }

  // private updateState(state: Product[]) {
  //   this.products.next(state);
  // }
}
