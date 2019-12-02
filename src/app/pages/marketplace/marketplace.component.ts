import { Component, OnInit } from '@angular/core';
import { cloudItems } from '../../core/services/marketplace.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.less'],
})
export class MarketplaceComponent implements OnInit {
  cloudItems = cloudItems;
  tabs = ['Все', 'Искуственный интеллект', 'Базы данных', 'Мониторинг', 'Функции', 'Kubernetes'];
  constructor(private readonly router: Router) {}

  ngOnInit() {}

  openItemPage(itemId: number) {
    this.router.navigate([`item/${itemId}`]);
  }
}
