import { UsersService } from './../users';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  private userList = inject(UsersService);

  user = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  };

  get passwordsDoNotMatch() {
    return (
      this.user.password &&
      this.user.confirmPassword &&
      this.user.password !== this.user.confirmPassword
    );
  }

  onSubmit(form: NgForm) {
    if (form.valid && !this.passwordsDoNotMatch) {
      this.userList.addUser({ ...this.user });
      console.log(this.userList)
      form.reset();
    }
  }
}
