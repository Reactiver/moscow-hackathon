import { Component, OnInit } from '@angular/core';
import { NzMarks } from 'ng-zorro-antd';

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

  constructor() {}

  ngOnInit() {}
}
