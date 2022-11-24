import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/shared/icategory';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  categorylist:Icategory[];
  orderselect:number=0;
 receiveordertotalprice:number=0;
  
  constructor() {
    this.categorylist=[{Id:1,name:'labtop'},{Id:2,name:'mobile'}]
    
   }

  ngOnInit(): void {
  }
  ontotalpricechanged(totalprice:number)
  {
  this.receiveordertotalprice=totalprice;
  }

}
