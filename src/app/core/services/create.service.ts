import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { RequestService } from './request.service';
import { distinctUntilChanged, map } from 'rxjs/operators';

export interface Plan {
  pricePerMonth: number;
  cpu: number;
  ram: number;
  ssd: number;
  hdd: number;
  configurationId: string;
  transfer: number;
}

export type PaymentType = 'year' | 'month' | 'hour' | 'minute' | 'prepay' | 'postpay';
export type Type = 'standard' | 'cpu-perform' | 'ram-perform';
export type Auth = 'ssh' | 'password';

export interface Configuration {
  type: Type;
  plans: Plan[];
  paymentType: PaymentType;
  ipv6: boolean;
  monitoring: boolean;
  droplets: Array<string>;
  backups: boolean;
  authentication: Auth;
}

let configurationState: Configuration = {
  type: 'standard',
  plans: [
    {
      pricePerMonth: 0,
      cpu: 0,
      ram: 0,
      ssd: 0,
      hdd: 0,
      configurationId: '',
      transfer: 0,
    },
  ],
  paymentType: 'month',
  ipv6: false,
  monitoring: false,
  droplets: [''],
  backups: false,
  authentication: 'password',
};

let unchangedPlans: Plan[] = [];

@Injectable({
  providedIn: 'root',
})
export class CreateService {
  private store = new BehaviorSubject<Configuration>(configurationState);
  private state$ = this.store.asObservable();

  plans$ = this.state$.pipe(
    map(state => state.plans),
    distinctUntilChanged()
  );
  type$ = this.state$.pipe(
    map(state => state.type),
    distinctUntilChanged()
  );
  backups$ = this.state$.pipe(
    map(state => state.backups),
    distinctUntilChanged()
  );

  constructor(private readonly request: RequestService) {
    combineLatest(this.type$, this.backups$)
      .pipe(
        map(([type, backups]) => {
          return this.updatePlans(type, backups);
        })
      )
      .subscribe(plans => this.updateState({ ...configurationState, plans }));
  }

  // ------- Public Methods ------------------------

  updateType(type: Type) {
    this.updateState({ ...configurationState, type });
  }

  updatePaymentType(paymentType: PaymentType) {
    this.updateState({ ...configurationState, paymentType });
  }

  updateBackups(backups: boolean) {
    this.updateState({ ...configurationState, backups });
  }

  create(
    ipv6: boolean,
    monitoring: boolean,
    droplets: string[],
    authentication: Auth,
    activePlan: number
  ): Observable<any> {
    const body = {
      ...configurationState,
      plans: undefined,
      ipv6,
      monitoring,
      droplets,
      authentication,
      configurationId: configurationState.plans[activePlan].configurationId,
    };

    return this.request.post<any>('rents', body);
  }

  getConfig(): void {
    this.request.get<Plan[]>('configs').subscribe(plans => {
      this.updateState({ ...configurationState, plans: plans.slice(0, 5) });
      unchangedPlans = plans.slice(0, 5);
    });
  }

  // ------- Private Methods ------------------------

  private updatePlans(type: Type, backups: boolean): Plan[] {
    let plans = unchangedPlans;

    if (type === 'cpu-perform') {
      const multPrice = 1.2;
      plans = plans.map(plan => ({
        ...plan,
        cpu: plan.cpu * 2,
        pricePerMonth: plan.pricePerMonth * multPrice,
      }));
    }

    if (type === 'ram-perform') {
      const multPrice = 1.4;
      plans = plans.map(plan => ({
        ...plan,
        ram: plan.ram * 2,
        sdd: plan.ssd ? plan.ssd * 2 : plan.ssd,
        hdd: plan.hdd ? plan.hdd * 2 : plan.hdd,
        pricePerMonth: plan.pricePerMonth * multPrice,
      }));
    }

    if (backups) {
      const fixPrice = 100;
      plans = plans.map(plan => ({
        ...plan,
        pricePerMonth: plan.pricePerMonth + fixPrice,
      }));
    }

    return plans;
  }

  private updateState(newState: Configuration) {
    configurationState = newState;
    console.log('STATE', newState);
    this.store.next(newState);
  }
}
