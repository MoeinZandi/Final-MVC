import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppUser } from '../../models/app-user.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [
    RouterLink,
    MatFormFieldModule, MatButtonModule, MatInputModule,
    FormsModule, ReactiveFormsModule,
  ],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent {
  private _http = inject(HttpClient);
  private _fB = inject(FormBuilder);

  userResponse: AppUser | undefined;

  //#region fG
  updateFg = this._fB.group({
    emailCtrl: [''],
    passwordCtrl: [''],
    confirmPasswordCtrl: ['']
  })

  get EmailCtrl(): FormControl {
    return this.updateFg.get('emailCtrl') as FormControl;
  }

  get Usernamectrl(): FormControl {
    return this.Usernamectrl.get('UsernameCtrl') as FormControl;
  }

  get PasswordCtrl(): FormControl {
    return this.updateFg.get('passwordCtrl') as FormControl;
  }

  get ConfirmPasswordCtrl(): FormControl {
    return this.updateFg.get('confirmPasswordCtrl') as FormControl;
  }
  //#endregion

  update(): void {
    let userInput: AppUser = {
      email: this.EmailCtrl.value,
      username: this.Usernamectrl.value,
      password: this.PasswordCtrl.value,
      confirmPassword: this.ConfirmPasswordCtrl.value
    }

    this._http.put<AppUser>
      ('http://localhost:5000/api/user/update-by-id/6874ce40da630f9bcf1a5bfe', userInput).subscribe({
        next: (res) => {
          console.log(res);
          this.userResponse = res;
        }
      })
  }
}
