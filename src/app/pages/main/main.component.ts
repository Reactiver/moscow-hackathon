import { Component, OnInit } from '@angular/core';
import { NzMarks } from 'ng-zorro-antd';
import { SearchService } from '../../core/services/search.service';

type SortType = 'price' | 'rate' | 'feedback' | null;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
export class MainComponent implements OnInit {
  radioValue: any;
  price = [100, 1000];
  params: any;
  marks: NzMarks = {
    100: '100 ₽',
    1000: {
      style: {
        'min-width': 'max-content',
      },
      label: '1000 ₽',
    },
  };

  sortType: SortType = null;
  priceType: 'up' | 'down' = 'up';

  constructor(public readonly searchService: SearchService) {}

  ngOnInit() {}

  sortBy(type: SortType) {
    this.sortType = type;

    if (this.sortType === 'price') {
      this.priceType = this.priceType === 'up' ? 'down' : 'up';
    }
  }
}
