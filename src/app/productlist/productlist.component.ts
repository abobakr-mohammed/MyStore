import { Component, OnInit } from '@angular/core';
import { noop } from 'rxjs';
import { DiscountOffers } from '../shared/discount-offers';
import { Icategory } from '../shared/icategory';
import { Iproduct } from '../shared/iproduct';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

Discount:DiscountOffers=DiscountOffers.DiscountOffer1;
discountt:boolean= true;
storname:string='dell';
storelogo:string='https://picsum.photos/200/300';
categorylist:Icategory[];
clientname:string='';
ispurshased:boolean=true;
products:Iproduct[];
ordertotlprice:number=0;
counteee :number= 0;
selectcat: number=0;

  constructor() { 
     this.products=[ {Id : 22,name :'able',price : 8055,quantity:20,imgurl:'https://picsum.photos/20/30',categoryid:1},
     {Id : 12,name :'lonovo',price : 5055,quantity:30,imgurl:'https://picsum.photos/20/30',categoryid:1},
     {Id : 10,name :'samsong',price : 3055,quantity:50,imgurl:'https://picsum.photos/20/30',categoryid:2},
     {Id : 50,name :'oppo',price : 5055,quantity:10,imgurl:'https://picsum.photos/20/30',categoryid:2}];
     
    
     this.categorylist=[{Id:1,name:'labtop'},{Id:2,name:'mobile'}]
  }

  ngOnInit(): void {
  }
  buy(propric:number,coun:string)
  {
    this.ispurshased=false;

      this.ordertotlprice=Number(coun)*propric;
      // this.ordertotlprice=+coun*propric;
      // this.ordertotlprice= parseInt(coun)*propric;
  }
  select()
  {
    this.counteee=1;
  }
  change()
  {
    this.ispurshased=true;
  }
  

}
