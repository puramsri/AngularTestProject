import { Injectable } from '@angular/core';
import { ILoginResult } from './login-result.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(username: string, password: string): Promise<ILoginResult> {
    return new Promise((resolve) => {
      if (username === 'user' && password === 'password') {
        resolve({ loginSuccessful: true });
      } else {
        resolve({ loginSuccessful: false });
      }
    });
  }
}
