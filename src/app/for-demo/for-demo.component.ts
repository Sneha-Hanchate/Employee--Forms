import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { HueGroup } from './huegroup';
import { Light } from './light';
import { Item } from "./switchcase";

@Component({
  selector: 'app-for-demo',
  templateUrl: './for-demo.component.html',
  styleUrls: ['./for-demo.component.css']
})
export class ForDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employeeList: Employee[]=[
    new Employee('1','Pratibha','Female','Developer'),
    new Employee('2','Nitish','Male','HR'),
    new Employee('3','Amos','Male','QA'),
  ];

  hueLightData: HueGroup[]=[
    {Name: 'group 1',Lights:[ new Light('light 1'), new Light('light 2')]},
    {Name:'group 2',Lights:[new Light('light 3'),new Light('light 4')]}
  ];

  selectedValue: string="Select";
  items: Item[]=[
    new Item('Select',0),
    new Item('One',1),
    new Item('Two',2),
    new Item('Three',3),
    new Item('Four',4),
    new Item('Five',5)
  ];
}
