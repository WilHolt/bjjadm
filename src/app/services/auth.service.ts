import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import {User, iUser} from '../common/user';

@Injectable({
  providedIn:'root',
})
export class AuthenticationService {
   private url:string ="/assets/data.json";
    constructor(private http: HttpClient) { }

    login(user:User):Observable<iUser[]> {
        return this.http.get<iUser[]>('https://jsonplaceholder.typicode.com/users');
    }

    logout() {
        localStorage.removeItem('CurrentUser');
    }
}
