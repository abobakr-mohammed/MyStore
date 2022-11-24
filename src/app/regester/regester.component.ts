import { Component, OnInit } from '@angular/core';
import { regest } from '../regest';

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.scss']
})
export class RegesterComponent implements OnInit {
  
  constructor() { }
  topics=['facebook' ,'twitter' , 'google']
   regest:regest = new regest('ehab','ehab@yahoo.com','123','123','facebook');
  ngOnInit(): void {
  }
  submitdata()
  {

  }

}
