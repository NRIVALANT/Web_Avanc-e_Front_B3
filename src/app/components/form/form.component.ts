import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}
  fg = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  register() {
    console.log('registered');
  }
  cancel() {
    console.log('cancel signup');
    this.fg.reset();
    this.router.navigate(['home']);
  }
  get firstname() {
    return this.fg.get('firstname');
  }
  get lastname() {
    return this.fg.get('lastname');
  }
  get email() {
    return this.fg.get('email');
  }
  get password() {
    return this.fg.get('password');
  }
  get confirmPassword() {
    return this.fg.get('confirmPassword');
  }

}
