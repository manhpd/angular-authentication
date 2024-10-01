import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})

export class AuthComponent {

  constructor(private _authService: AuthService) {}
  isLoginMode = true;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    const subscription = this.isLoginMode ? this._authService.login(form.value.email, form.value.password) : this._authService.signUp(form.value.email, form.value.password);
    subscription.subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
    form.reset();
  }
}
