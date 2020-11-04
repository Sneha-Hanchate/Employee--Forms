import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  id1;
name;
age;
email;
gender;
flag:boolean=false;
  arrEmployee: Employee[]=[
    new Employee(1,"Pratibha Kamble",24,"pratibha@gmail.com","female"),
    new Employee(2,"Nitish Dalbhanjan",26,"nitish@gmail.com","male"),
    new Employee(3,"Sara Kamble", 20,"sara@gmail.com","female"),

  ];

  OnEmpDelete(item)
  {
    this.arrEmployee.splice(this.arrEmployee.indexOf(item),1)
  }

  OnEmpAdd()
  {
    this.arrEmployee.push(new Employee(this.id1,this.name,this.age,this.email,this.gender));
    this.flag=false;
  }

  OnNewAddEmployeeClick()
  {
    this.flag=true;
  }

  OnCancleEmp()
  {
    this.flag=false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
