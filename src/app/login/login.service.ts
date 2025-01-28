import { Injectable } from '@angular/core';

interface ILoginResult 
{ loginSuccessful: boolean;
}

@Injectable({
providedIn: 'root'
})

export class LoginService {
testUsers = [
  { username:'user', password: 'pwd'},
  {username :'test', password: 'test'},
  {username: 'username', password: 'password' },
]
constructor () { }
login (username: string, password: string): Promise<ILoginResult> {
return new Promise ((resolve, reject) => {
const findUser = this.testUsers. find (user => user.username== username && user.password == password) ;
if (findUser) {
resolve ({ loginSuccessful: true }) ;
} else {
resolve ({ loginSuccessful: false });
}
});
}
}