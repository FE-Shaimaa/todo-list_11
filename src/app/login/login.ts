import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { UsersService } from '../users';
import { CommonModule } from '@angular/common';


interface ILog {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private router = inject(Router);
  private userList = inject(UsersService)
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  error = false;
  onSubmit() {
    if (this.userForm.valid) {
      const user: ILog = this.userForm.value as ILog;
      if (this.userList.isExist(user)) {
        this.router.navigate(['/products']);
      } else {
        this.error = true;
      }
    }
  }

}
