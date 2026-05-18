import {
  Component,
  DestroyRef,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { AuthService } from '../../services/auth';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginRequest } from '../../shared/model/loginRequest';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService: AuthService = inject(AuthService);

  private router: Router = inject(Router);

  //docs: https://angular.dev/api/core/DestroyRef
  // Lifecycle : reduce memory leak
  private destroyRef: DestroyRef = inject(DestroyRef);

  public formLogin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  public errorMessage: WritableSignal<string> = signal('');

  showPassword: boolean = false;

  login() {
    if (this.formLogin.valid) {
      const credentials = this.formLogin.value as LoginRequest;
      this.authService
        .login(credentials)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: () => {
            this.router.navigate(['/dashboard']);
          },
          error: () => {
            this.errorMessage.set('Invalid email or password');
          },
        });
    } else {
      this.errorMessage.set('Please fill in all fields correctly.');
    }
  }

  hasError(controlName: string, errorName: string): boolean {
    return (
      this.formLogin.controls[controlName].hasError(errorName) &&
      this.formLogin.controls[controlName].touched
    );
  }
}
