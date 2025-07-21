import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppUser } from '../../models/app-user.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    MatFormFieldModule, MatButtonModule, MatInputModule,
    FormsModule, ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private _http = inject(HttpClient);
  private _fB = inject(FormBuilder);

  userResponse: AppUser | undefined;
  error: string | undefined;

  //#region Fg
  registerFg = this._fB.group({
    emailCtrl: ['', [Validators.required, Validators.maxLength(50), Validators.email]],
    passwordCtrl: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
    confirmPasswordCtrl: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
  })

  get EmailCtrl(): FormControl {
    return this.registerFg.get('emailCtrl') as FormControl;
  }

  get Usernamectrl(): FormControl {
    return this.Usernamectrl.get('UsernameCtrl') as FormControl;
  }

  get PasswordCtrl(): FormControl {
    return this.registerFg.get('passwordCtrl') as FormControl;
  }

  get ConfirmPasswordCtrl(): FormControl {
    return this.registerFg.get('confirmPasswordCtrl') as FormControl;
  }
  //#endregion

  register(): void {
    let userInput: AppUser = {
      email: this.EmailCtrl.value,
      username: this.Usernamectrl.value,
      password: this.PasswordCtrl.value,
      confirmPassword: this.ConfirmPasswordCtrl.value
    }

    this._http.post<AppUser>('http://localhost:5000/api/user/register', userInput).subscribe({
      next: (res) => {
        console.log(res);
        this.userResponse = res;
      },
      error: (err) => this.error = err.error
    })
  }
}
