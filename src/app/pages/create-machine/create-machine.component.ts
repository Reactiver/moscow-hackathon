import { Component, OnDestroy, OnInit } from '@angular/core';
import { Auth, CreateService, PaymentType, Plan, Type } from '../../core/services/create.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-machine',
  templateUrl: './create-machine.component.html',
  styleUrls: ['./create-machine.component.less'],
})
export class CreateMachineComponent implements OnInit, OnDestroy {
  type: Type = 'standard';
  plans$: Observable<Plan[]> = this.createService.plans$;
  activePlan = -1;
  ipv6: boolean;
  monitoring: boolean;
  authentication: Auth = 'password';
  machinesForm: FormGroup;
  listOfControl: Array<{ id: number; controlInstance: string }> = [];
  backups: boolean;
  paymentType: PaymentType = 'month';

  private destroy$ = new ReplaySubject<void>();

  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id =
      this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;

    const control = {
      id,
      controlInstance: `machine${id}`,
    };
    const index = this.listOfControl.push(control);

    this.machinesForm.addControl(
      this.listOfControl[index - 1].controlInstance,
      new FormControl(`machine-v${index}`, Validators.required)
    );
  }

  constructor(
    private fb: FormBuilder,
    public createService: CreateService,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.machinesForm = this.fb.group({});
    this.addField();
    this.createService.getConfig();

    this.createService.plans$.subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfControl.length > 1) {
      const index = this.listOfControl.indexOf(i);
      this.listOfControl.splice(index, 1);
      this.machinesForm.removeControl(i.controlInstance);
    }
  }

  create(): void {
    this.validateFields();
    const isValid = this.machinesForm.valid && this.activePlan !== -1;

    if (isValid) {
      this.createService
        .create(
          this.ipv6,
          this.monitoring,
          Object.values(this.machinesForm.value),
          this.authentication,
          this.activePlan
        )
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.router.navigate(['machines']));
    }
  }

  private validateFields() {
    // tslint:disable-next-line:forin
    for (const i in this.machinesForm.controls) {
      this.machinesForm.controls[i].markAsDirty();
      this.machinesForm.controls[i].updateValueAndValidity();
    }

    if (this.activePlan === -1) {
      this.message.create('error', 'Пожалуйста, выберите нужный вам тип виртуальной машины');
    }
  }
}
