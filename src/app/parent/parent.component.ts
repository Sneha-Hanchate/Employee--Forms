import { Component, EventEmitter, OnInit, ViewEncapsulation, Output,Input } from '@angular/core';

import { Product1 } from "./product";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation: ViewEncapsulation.None,
  //encapsulation: ViewEncapsulation.Emulated
})
export class ParentComponent implements OnInit {
  selectedCategory:string='Watch';
  pname;
  price;
  flag : boolean = true;
  flag1: boolean=  true;
  image: string;
  productarr1: Product1[]=[
      new Product1('Food',200),
      new Product1('Cold Drinks',300),
      new Product1('Beauty',400),
      new Product1('Skin Care',100),
      new Product1('Medicin',800),
      new Product1('School Product',150)
  ];

  productarr2: Product1[]=[];

  constructor() { }

  ngOnInit(): void {
  }



  onMyEvent(val)
  {
    console.log(val,"This is from Parent Component");
    this.productarr1= this.productarr1.filter((x) => x.pname.startsWith(val));
   /* this.productarr2= this.productarr2.filter((x) => x.pname.startsWith(val));
    this.productarr3= this.productarr3.filter((x) => x.pname.startsWith(val));
    this.productarr4= this.productarr4.filter((x) => x.pname.startsWith(val));
    this.productarr5= this.productarr5.filter((x) => x.pname.startsWith(val));
    this.productarr6= this.productarr6.filter((x) => x.pname.startsWith(val));*/
  }

  OnAddcartClick(productarr1)  {
    this.productarr2.push(new Product1(productarr1.pname,productarr1.price));
    console.log(productarr1);
   // console.log("Name :",name,"Price :",price );
  //  this.productarr1.push(new Product1(name,price));
    //this.addcart.emit(this.productarr1);
  }

  OnProductButtonCLick()
  {
    this.flag1= !this.flag1;
  }

  onclick()
  {
    this.flag= !this.flag;
  }

  onCancelClick()
  {
    this.flag=true;
  }

}

