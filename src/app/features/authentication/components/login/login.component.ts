import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, PasswordModule, InputTextModule, ButtonModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  private fb: FormBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
