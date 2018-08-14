import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/auth.service';
import { UserService } from '../services/users.service';
import {User, iUser} from '../common/user';
import { SharedModule } from '../shared/shared.module';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  list: iUser[];
  user:User;
  loginForm : FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService
     ) {
      this.user = new User();
      this.loginForm = fb.group({
        username: ['', Validators.required ],
        password:''
      });
    }
    get f() { return this.loginForm.controls; }
    onSubmit(){
      this.user= this.loginForm.value;
      //console.log(this.user);
      this.userService.setLogin(this.user);
      //console.log(JSON.parse(this.userService.getLogin()));

      //.subscribe(res => console.log(res));

      //localStorage.setItem('CurrentUser',  JSON.stringify(this.user));
      //console.log(localStorage.getItem('CurrentUser'));
      //   this.submitted = true;
      //
      //   // stop here if form is invalid
      //   if (this.loginForm.invalid) {
      //   return;
      // }
      //
      // this.loading = true;
      // console.log(this.f.username.value);
      // this.authenticationService.login(this.f.username.value, this.f.password.value)
      // .pipe(first())
      // .subscribe(
      //   data => {
      //     console.log(data);
      //     this.router.navigate([this.returnUrl]);
      //   },
      //   error => {
      //     this.error = error;
      //     this.loading = false;
      //   });

    }

    ngOnInit() {
      console.log(this.loginForm.value);

    }

  }
