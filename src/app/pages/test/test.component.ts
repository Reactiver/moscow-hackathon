import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less'],
})
export class TestComponent implements OnInit {
  form: FormGroup;
  constructor() {}

  prefixes = ['+7', '+48', '+1'];

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      phoneNumber: new FormControl(null, Validators.required),
      phoneNumberPrefix: new FormControl('+7'),
    });
  }

  submitForm() {
    console.log('submit');
  }
}
