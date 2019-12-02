import { Component, OnDestroy, OnInit } from '@angular/core';
import { RequestService } from '../../core/services/request.service';
import { Observable, ReplaySubject, timer } from 'rxjs';
import { mergeMap, switchMap, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-machines',
  templateUrl: './list-machines.component.html',
  styleUrls: ['./list-machines.component.less'],
})
export class ListMachinesComponent implements OnInit, OnDestroy {
  machines$: Observable<any>;
  destroy$ = new ReplaySubject<void>();
  constructor(private request: RequestService) {}

  ngOnInit() {
    this.machines$ = timer(0, 1000).pipe(
      takeUntil(this.destroy$),
      mergeMap(() => this.request.get<any>('rents'))
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
