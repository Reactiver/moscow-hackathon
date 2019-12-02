import { Component, OnDestroy, OnInit } from '@angular/core';
import { Item, ItemService } from '../../core/services/item.service';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less'],
})
export class ItemComponent implements OnInit, OnDestroy {
  private destroy$ = new ReplaySubject<void>();
  item$: Observable<Item>;
  itemId: string;

  listOfData = [
    {
      package: 'Docker CE',
      version: '18.06.1',
      license: 'Apache 2',
    },
    {
      package: 'Docker Compose',
      version: '1.17.1',
      license: 'Apache 2',
    },
  ];

  sshCode = `ssh root@use_your_droplet_ip`;
  code = `curl -X POST -H 'Content-Type: application/json' \\
  -H 'Authorization: Bearer '$TOKEN'' -d \\
  '{"name":"choose_a_name","region":"russia", \\
  "size":"32gb-ram-4-cpu","image":"docker-18-04"}' \\
  "https://shaldnikita.ru/api/rents"`;

  constructor(
    private readonly itemService: ItemService,
    private readonly route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe(params => {
      this.itemId = params.get('itemId');
      this.getProduct(this.itemId);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  private getProduct(id: string) {
    this.item$ = this.itemService.getItem(id);
  }

  createMachine() {
    console.log('create')
    this.router.navigate([`create/${this.itemId}`]);
  }
}
