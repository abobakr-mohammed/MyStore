import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticproductService } from '../services/staticproduct.service';
import { Iproduct } from '../shared/iproduct';

@Component({
  selector: 'app-selectedproduct',
  templateUrl: './selectedproduct.component.html',
  styleUrls: ['./selectedproduct.component.scss']
})
export class SelectedproductComponent implements OnInit {
currid:number=0;
newproduct:Iproduct | null=null;
  constructor(private activaterour:ActivatedRoute,private selectservice:StaticproductService , private location:Location) { }
    
  ngOnInit(): void {
    this.currid=Number(this.activaterour.snapshot.paramMap.get('pid'));
   this.newproduct= this.selectservice.getproductsbyid(this.currid) 
  }
  goback()
  {
          this.location.back();
  }
  

  


}
