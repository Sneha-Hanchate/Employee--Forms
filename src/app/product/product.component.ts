import { Component, OnInit } from '@angular/core';
import { Product } from "./product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

id2;
name1;
date;

  arrProduct: Product[]=[

    new Product(401,"iphone","1 Sept 2020"),
    new Product(402,"Samsung","30 May 2019"),
    new Product(403,"Lenovo","12 Jan 2020"),
    new Product(404,"Oppo","25 Oct 2012"),
  ];

  OnAddProduct()
  {
    this.arrProduct.push(new Product(this.id2,this.name1,this.date));
  }

  OnProductDelete(item)
  {
    this.arrProduct.splice(this.arrProduct.indexOf(item),1)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
