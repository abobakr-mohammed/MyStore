import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Iuser } from '../iuser';
import { Iproduct } from '../shared/iproduct';
import {throwError } from 'rxjs';
import { Ipost } from '../ipost';

@Injectable({
  providedIn: 'root'
})
export class StaticproductService {
  products:Iproduct[];
  _url:string='https://jsonplaceholder.typicode.com/users';
  _URL2:string='https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) {
    this.products=[ {Id : 22,name :'able',price : 8055,quantity:20,imgurl:'https://picsum.photos/20/30',categoryid:1},
     {Id : 12,name :'lonovo',price : 5055,quantity:30,imgurl:'https://picsum.photos/20/30',categoryid:1},
     {Id : 10,name :'samsong',price : 3055,quantity:50,imgurl:'https://picsum.photos/20/30',categoryid:2},
     {Id : 50,name :'oppo',price : 5055,quantity:10,imgurl:'https://picsum.photos/20/30',categoryid:2}];
 
   }
   getallproduct():Iproduct[]
   {
    return this.products;
   }
   getproductsbycateguryid(cid:number):Iproduct[]
   {
    if(cid==0)
    {
      return this.products;
    }
    else{
  return this.products.filter(pro=>pro.categoryid==cid)
   }
  }
   getproductsbyid(idpro:number):Iproduct | null
   {
 
   let getpr= this.products.find(pro=>pro.Id==idpro);
   return getpr? getpr: null;

   }
   getusers():Observable<Iuser[]>
   {
    return this.http.get<Iuser[]>(this._url).pipe(catchError((errr)=>
    {
    return throwError(()=> errr.message||"Server error");
    })
   
    )
  } 

  getposts()
  {
    return this.http.get<Ipost[]>(this._URL2).pipe(catchError((errr)=>
    {
    return throwError(()=> errr.message||"Server error");
    })
   
    )
  }
  
    
    

  
}