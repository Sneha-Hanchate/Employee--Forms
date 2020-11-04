import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  a:number=0;
  b:number=0;
  sum:number=0;
  substract:number=0;
  multiplication:number=0;
  division:number=0;


  name:String='pratibha kamble';


  no1: number=10;
  str: string="Pratibha Kamble";
  flag: boolean=true;
  str1:string="pratibha";
  number1;
  flag1:boolean;
  c:number=0;
  d:number=0;
  e:number=0;
  f:number=0;
  g:number=0;
  h:number=0;
  i:number=0;
  j:number=0;
  m:number;
  name1:String="PRATIBHA KAMBLE";
  name2:string="pratibha kamble";
  value:number=456.564;
  value2:number=.25;

  n:number=56.45789;

  lowercase:string="pratibha";
  uppercase:string="PRATIBHA";

 public person={
   "FirstName": "Pratibha",
   "LastName": "Kamble"
 }

  val1: number = 0.259;
  val2: number = 1.3495;

  today:number=Date.now();

  object:Object[]=[
    'Pratibha',
    'Kamble'
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(){
    alert("Hello Pratibha Welcome To Novodhi Solutions!");
  }


  OnKeyPress(){
    alert("You press key");
  }

  OnAddClick(){
    this.sum=this.a+this.b;
  }
  OnSubstractClick(){
    this.substract= this.a-this.b;
  }
  OnMultiClick(){
    this.multiplication= this.a*this.b;
  }
  OnDivisionClick(){
    this.division= this.a/this.b;
  }



  OnclickMultiTable()
  {
    this.a= this.number1*1;
    this.b= this.number1*2;
    this.c= this.number1*3;
    this.d= this.number1*4;
    this.e= this.number1*5;
    this.f= this.number1*6;
    this.g= this.number1*7;
    this.h= this.number1*8;
    this.i= this.number1*9;
    this.j= this.number1*10;

  }
  OnShowTable()
  {
    this.flag1=true;
  }
  ans:number;
  OnAddButtonClick(no1,no2)
  {
    this.ans=parseInt(no1)+ parseInt(no2);
  }
}
