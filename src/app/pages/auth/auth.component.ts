import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less'],
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;

  submitForm(): void {
    this.messageService.info('Вы вошли');
    // tslint:disable-next-line:forin
    for (const i in this.authForm.controls) {
      this.authForm.controls[i].markAsDirty();
      this.authForm.controls[i].updateValueAndValidity();
    }

    if (this.authForm.valid) {
      this.router.navigate(['/']);
    }
  }

  constructor(private messageService: NzMessageService, private router: Router) {}

  ngOnInit(): void {
    this.authForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      remember: new FormControl(false),
    });
  }
}
