import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/common/user'
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
users: User[];
  constructor() { }
  addProfessor(){
  this.users.push( {
      name:"zeze",
      nickname:"di camargo",
      belt:"brown",
      payment:"Ativo"
    })
  }
  ngOnInit() {
    this.users = [
      {
        name:"Wilder",
        nickname:"Wil",
        belt:"blue",
        payment:"Ativo"
      },
      {
        name:"Deyverson",
        nickname:"Pantera",
        belt:"brown",
        payment:"Ativo"
      },
      {
        name:"Wilder",
        nickname:"Wil",
        belt:"blue",
        payment:"ATIVO"
      },
      {
        name:"Deyverson",
        nickname:"Pantera",
        belt:"brown",
        payment:"ATIVO"
      },
      {
        name:"Wilder",
        nickname:"Wil",
        belt:"blue",
        payment:"ATIVO"
      },
      {
        name:"Deyverson",
        nickname:"Pantera",
        belt:"brown",
        payment:"ATIVO"
      },
      {
        name:"Wilder",
        nickname:"Wil",
        belt:"blue",
        payment:"ATIVO"
      },
      {
        name:"Deyverson",
        nickname:"Pantera",
        belt:"brown",
        payment:"ATIVO"
      }
    ];
  }

}
