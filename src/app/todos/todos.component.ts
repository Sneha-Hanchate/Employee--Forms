import { Component, OnInit } from '@angular/core';
import { Todo ,Todo1} from "./todo" ;
import { TaskDataService } from "./task-data.service";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

 // arrName: string[] =['Pratibha', 'Kamble'];
 // arrNumber: number[] =[1,2,3,4,5];
  // {"id": 1,"title":"Hello","status":"Done"}

  Id;
  Title;
  Status;
flag:boolean= false;


constructor(private _data:TaskDataService) { }

ngOnInit(): void {
  this._data.getAllTask().subscribe(
    (data:Todo[]) =>{
      this.arrTodos= data;
    }
  );
}

  arrTodos: Todo[]=[];

 /* arrTodos: Todo[]=[
    new Todo(1, "Wear a mask","done"),
    new Todo(2, "mail to your manager","pending"),
    new Todo(3, "Some Task","pending"),
    new Todo(4, "Coding Task","done"),
  ];*/
  OnDeleteClick(item:Todo)
  {
    this.arrTodos.splice(this.arrTodos.indexOf(item),1)
  }
  OnEditClick(item)
  {
    if(item.Status=="done")
    {
      item.Status="pending";
    }
    else
    {
      item.Status="done";
    }
  }

  OnTaskAdd()
  {
    this.arrTodos.push(new Todo(this.Id,this.Title,this.Status));
    this.flag=false;
  }


  arrTodosinterface:Todo1[]=[
    {Id:1,Title:"demo",Status:"done"}
  ];

  OnNewAddTaskClick()
  {
    this.flag=true;
  }

  OnCancleClick()
  {
    this.flag=false;
  }



}
