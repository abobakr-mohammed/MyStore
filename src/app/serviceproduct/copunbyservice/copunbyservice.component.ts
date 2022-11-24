import { getLocaleDateFormat } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StaticproductService } from 'src/app/services/staticproduct.service';
import { Iproduct } from 'src/app/shared/iproduct';

@Component({
  selector: 'app-copunbyservice',
  templateUrl: './copunbyservice.component.html',
  styleUrls: ['./copunbyservice.component.scss']
})
export class CopunbyserviceComponent implements OnInit {
  products : Iproduct[]=[];
  constructor(private prodductservice:StaticproductService, private router:Router) { }
  @Output() getlist=new EventEmitter();
  ngOnInit(): void {
    
  }


  getdata()
  {
    this.getlist.emit(this.prodductservice.getallproduct());
    //this.products=this.prodductservice.getallproduct();
  }
  selectprod(proid:number)
  {
   this.router.navigate(['/serviceorder',proid]);

  }

}
