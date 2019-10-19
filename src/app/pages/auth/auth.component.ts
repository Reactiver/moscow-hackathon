import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less'],
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;

  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.authForm.controls) {
      this.authForm.controls[i].markAsDirty();
      this.authForm.controls[i].updateValueAndValidity();
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.authForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      remember: new FormControl(false),
    });
  }
}
