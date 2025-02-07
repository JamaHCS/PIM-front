import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, PasswordModule, InputTextModule, ButtonModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  private fb = inject(FormBuilder);

  private authService = inject(AuthService);

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  login = () =>
    this.form.valid
      ? this.authService
          .login({
            email: this.form.get('email')?.value,
            password: this.form.get('password')?.value,
          })
          .subscribe()
      : null;
}
