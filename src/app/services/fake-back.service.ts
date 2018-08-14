import { Injectable } from '@angular/core';
import {User, iUser, Student, Prof} from 'src/app/common/user'
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
@Injectable({
  providedIn:'root',
})

export class FakeBackend {
  prof: Prof[];

  // getProfessor(): Observable< Prof[] >{
  //   this.prof = [
  //     {
  //       name:"Wilder",
  //       nickname:"Wil",
  //       belt:"blue",
  //       payment:"ATIVO"
  //     },
  //     {
  //       name:"Deyverson",
  //       nickname:"Pantera",
  //       belt:"brown",
  //       payment:"ATIVO"
  //     },
  //     {
  //       name:"Wilder",
  //       nickname:"Wil",
  //       belt:"blue",
  //       payment:"ATIVO"
  //     }
  //   ];
  //   return this.prof;
  // }
}
