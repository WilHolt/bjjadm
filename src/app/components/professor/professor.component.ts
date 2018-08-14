import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FakeBackend } from 'src/app/services/fake-back.service';
import {User} from 'src/app/common/user'

declare var $: any;
var MATERIALIZE:any;
@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit, AfterViewInit {

  users:User[];

  constructor(private fake: FakeBackend) { }
  ngAfterViewInit(){
    //
    // $(document).ready(function(){
    //   $('.modal').modal();
    // });

  }
  addProfessor(){
  this.users.push( {
      name:"zeze",
      nickname:"di camargo",
      belt:"brown",
      payment:"ATIVO"
    })
  }
  ngOnInit() {
    // //this.fake.getProfessor()
    // .subscribe(res => this.users = res);
    // console.log(this.users);
    // console.log(this.users);
    // let belt= "belt";

  }

}
