import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angularform',
  templateUrl: './angularform.component.html',
  styleUrls: ['./angularform.component.css']
})
export class AngularformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  OnEmpAdd(f){
    console.log(f);
  }

  

}
