import { Component, OnInit } from '@angular/core';
import {User, iUser} from '../common/user';
import { UserService } from '../services/users.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user:User;
users: iUser;
  constructor(  private userService:UserService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(this.userService.getLogin());
    //this.userService.getUsers()
    //.subscribe(res => console.log(res));
     //console.log(this.users);
  }

}
