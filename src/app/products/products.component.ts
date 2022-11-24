import { Component, OnInit } from '@angular/core';
import { Stordata } from '../viewmodel/stordata';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 storeinfo: Stordata;
 infimg:boolean= true;
  constructor() { 
    this.storeinfo=new Stordata('iti','https://picsum.photos/200/300',['cairo','elmenia','aseut']);
  }

  ngOnInit(): void {
  }
  changefun()
  {
    this.infimg=!this.infimg;
  }


}
