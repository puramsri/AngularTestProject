import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
 
interface ILoginResult {
  loginSuccessful: boolean;
}
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm: FormGroup;
  isFormSubmitted = false;
  loginMessage: string = '';
 
 
  constructor(private builder: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.builder.group({
 
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
 
    });
  }
 
  ngOnInit() {
 
  }
 
  login() {
    this.isFormSubmitted = true;
    const { username, password } = this.loginForm.value;
    if(!username || !password){
      return;
    }
    this.loginService.login(username, password).then((result: ILoginResult) => {
      this.loginMessage = result.loginSuccessful ? 'Login successful!' : 'Invalid username or password.';
      // if (result.loginSuccessful) {
      //   this.loginMessage = 'Login successful!';
      // } else {
      //   this.loginMessage = 'Invalid username or password.';
      // }
    }).catch((error) => {
      console.error('Error during login', error);
      this.loginMessage = 'An error occurred during login.';
    });
  }
}