import { Component, OnInit } from '@angular/core';
import { TodoShow ,Todo2} from './todos';
import { EmployeeShow } from "./employee";

@Component({
  selector: 'app-showtable',
  templateUrl: './showtable.component.html',
  styleUrls: ['./showtable.component.css']
})
export class ShowtableComponent implements OnInit {

  id;
  title;
  status;
flag:boolean= false;
flag1:boolean=false;

  arrTodoShow: TodoShow[]=[
    new TodoShow(1, "Wear a mask","done"),
    new TodoShow(2, "mail to your manager","pending"),
    new TodoShow(3, "Some Task","pending"),
    new TodoShow(4, "Coding Task","done"),
  ];
  OnDeleteClick(item:TodoShow)
  {
    this.arrTodoShow.splice(this.arrTodoShow.indexOf(item),1)
  }
  OnEditClick(item)
  {
    if(item.status=="done")
    {
      item.status="pending";
    }
    else
    {
      item.status="done";
    }
  }

 OnTaskAdd()
  {
    this.arrTodoShow.push(new TodoShow(this.id,this.title,this.status));
    this.flag=false;
  }


  arrTodoShowinterface:Todo2[]=[
    {id:1,title:"demo",status:"done"}
  ];


  OnShowTodoClick()
  {
    this.flag=true;
  }
  OnCancleTodo()
  {
    this.flag=false;
  }



  id1;
  name;
  age;
  email;
  gender;
  arrEmployeeShow: EmployeeShow[]=[
    new EmployeeShow(1,"Pratibha Kamble",24,"pratibha@gmail.com","female"),
    new EmployeeShow(2,"Nitish Dalbhanjan",26,"nitish@gmail.com","male"),
    new EmployeeShow(3,"Sara Kamble", 20,"sara@gmail.com","female"),

  ];

  OnEmpDelete(item)
  {
    this.arrEmployeeShow.splice(this.arrEmployeeShow.indexOf(item),1)
  }
  OnEmpAdd()
  {
    this.arrEmployeeShow.push(new EmployeeShow(this.id1,this.name,this.age,this.email,this.gender));
    this.flag1=false;
  }


  OnShowEmpClick()
  {
    this.flag1=true;
  }

  OnCancleEmp()
  {
    this.flag1=false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
