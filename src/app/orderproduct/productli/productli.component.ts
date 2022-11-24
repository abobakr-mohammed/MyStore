import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DiscountOffers } from 'src/app/shared/discount-offers';
import { Icategory } from 'src/app/shared/icategory';
import { Iproduct } from 'src/app/shared/iproduct';

@Component({
  selector: 'app-productli',
  templateUrl: './productli.component.html',
  styleUrls: ['./productli.component.scss'],
})
export class ProductliComponent implements OnInit ,OnChanges  {
  Discount:DiscountOffers=DiscountOffers.DiscountOffer1;
discountt:boolean= true;
storname:string='dell';
storelogo:string='https://picsum.photos/200/300';

clientname:string='';
ispurshased:boolean=true;
products:Iproduct[];
ordertotlprice:number=0;
counteee :number= 0;
selectcat: number=0;
listofproductfilter:Iproduct[]=[];
@Input() sencatid:number=0;
 @Output() totalpricechaneged :EventEmitter<number>;



  constructor() { 
    this.totalpricechaneged=new EventEmitter<number>();
    this.products=[ {Id : 22,name :'able',price : 8055,quantity:20,imgurl:'https://picsum.photos/20/30',categoryid:1},
     {Id : 12,name :'lonovo',price : 5055,quantity:30,imgurl:'https://picsum.photos/20/30',categoryid:1},
     {Id : 10,name :'samsong',price : 3055,quantity:50,imgurl:'https://picsum.photos/20/30',categoryid:2},
     {Id : 50,name :'oppo',price : 5055,quantity:10,imgurl:'https://picsum.photos/20/30',categoryid:2}];
 

  }
  ngOnChanges(): void {
   this.filterproduct();
  }

  ngOnInit(): void {
  }
  buy(propric:number,coun:string)
  {
     // this.ordertotlprice=+coun*propric;
      // this.ordertotlprice= parseInt(coun)*propric;

      this.ordertotlprice +=Number(coun)*propric;
      this.totalpricechaneged.emit(this.ordertotlprice);

     
  }
  select()
  {
    this.counteee=1;
  }
  filterproduct()
  {  
    if(this.sencatid==0)
    {
      this.listofproductfilter=this.products;
    }
    else{
  this.listofproductfilter=this.products.filter(pro=>pro.categoryid==this.sencatid)
    }
  }

}
