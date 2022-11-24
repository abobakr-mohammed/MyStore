import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { CopunbyserviceComponent } from '../serviceproduct/copunbyservice/copunbyservice.component';
import { Iproduct } from '../shared/iproduct';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  list:Iproduct[]=[];
  flak:boolean =false;
  constructor() { }
 @ViewChild(CopunbyserviceComponent)
  child!: CopunbyserviceComponent;
  ngOnInit(): void {
    
  }
  fun()
  {
    this.flak = true;
    this.child.getdata();
  }

}
