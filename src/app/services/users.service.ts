import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User, iUser} from '../common/user';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn:'root',
})
export class UserService {
  user:User;
  users:iUser[];
  constructor(private http: HttpClient) { }

  setLogin(_user: User) {
    this.user=_user;
    localStorage.setItem('CurrentUser',  JSON.stringify(this.user));

    }
  getLogin(){
    return localStorage.getItem('CurrentUser');

  }
   // getUsers():Observable<iUser[]>{
   //       return this.http.get<iUser[]>('https://jsonplaceholder.typicode.com/users')
   //       .pipe(filter(res=> res.id > 1 ),
   //        map(res => res[0]));
   // }
}
