import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service'; 
import { ILoginResult } from './login-result.model'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string | null = null;

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.loginService.login(username, password)
        .then((result: ILoginResult) => {
          if (result.loginSuccessful) {
            console.log('Login successful');
            this.loginError = null;
          } else {
            this.loginError = 'Invalid credentials';
          }
        });
    }
  }
}
