import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ipost } from '../ipost';
import { StaticproductService } from '../services/staticproduct.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  errmass:string='';
  constructor( private service:StaticproductService) { }
 errormassage:string="";
 posts:Ipost[]=[];
  ngOnInit(): void {
    this.service.getposts().subscribe({
      next: (data)=>
       {
       this.posts=data
       },
       error:(error)=>
  {
  this.errmass=error
  }
 });
  }
    
}

