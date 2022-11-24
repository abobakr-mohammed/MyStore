import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../enroll.service';
import { user } from '../user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {
 
  constructor(private service:EnrollService) { }
 topics=["anqular","core","api"];
 usermodel:user=new user('ehab','ehababdeo@yahoo.com','01282407472','anqular','morning',true);
  ngOnInit(): void {
  }
  submitdata()
  {
   console.log(this.usermodel)
  } 
    
   
    
 
     
     
     
  

}
