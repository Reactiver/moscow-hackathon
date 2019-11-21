import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../core/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  constructor() {}

  ngOnInit() {}
}
