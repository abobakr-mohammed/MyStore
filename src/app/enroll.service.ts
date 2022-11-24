import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {
_url:string='http://localhost:3000/enroll';
  constructor(private http:HttpClient) { }


  enroll(user:user)
  {
      return  this.http.post(this._url,user);
  }
}
