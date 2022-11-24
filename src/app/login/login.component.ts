import { Component, OnInit } from '@angular/core';
import { login } from '../loginuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
 login:login= new login('ehab@yahoo.com','123');
  ngOnInit(): void {
  }
  logintdata()
  {
    
  }

}
