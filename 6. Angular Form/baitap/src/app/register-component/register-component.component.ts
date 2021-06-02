import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    // name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    // price: new FormControl(),
    // description: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
    country: new FormControl(),
    age: new FormControl(),
    gender: new FormControl(),
    phone: new FormControl()
  });
  constructor() { }

  ngOnInit() {
  }

  registerUser() {

  }
}
