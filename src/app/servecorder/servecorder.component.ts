import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { StaticproductService } from '../services/staticproduct.service';
import { Iproduct } from '../shared/iproduct';

@Component({
  selector: 'app-servecorder',
  templateUrl: './servecorder.component.html',
  styleUrls: ['./servecorder.component.scss']
})
export class ServecorderComponent implements OnInit {
   serproduct:Iproduct[]=[];
  constructor( private service:StaticproductService,private router:Router) { }

  ngOnInit(): void {
  }
  getdata()
  {
    
    this.serproduct=this.service.getallproduct();
  }
  selectprod(proid:number)
  {
   this.router.navigate(['/serviceorder',proid]);

  }

}
