import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../iuser';
import { StaticproductService } from '../services/staticproduct.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
   uesrs:Iuser[]=[];
   errormassage:string='';
   
  constructor(private serviceusers:StaticproductService ) { }

  ngOnInit() {
    this.serviceusers.getusers().subscribe({
     next: (data)=>
      {
      this.uesrs=data
      },
      error:(error)=>
 {
 this.errormassage=error
 },
});


}
 

}
