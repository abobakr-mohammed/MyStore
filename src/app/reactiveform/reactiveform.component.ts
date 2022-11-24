import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlDirective, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
//  regestrationform=new FormGroup({
//   username:new FormControl(''),
//   passowred: new FormControl(''),
//   confirmpassowred:new FormControl(''),
//   address:new FormGroup({
//     city :new FormControl(''),
//     street: new FormControl(''),
//     postalcode: new FormControl(''), 
regestrationform=this.fb.group({
  username:[''],
  passowred:[''],
  confirmpassowred:[''],
  address:this.fb.group({
    city :[''],
    street: [''],
    postalcode: [''],
  })

 })
  ngOnInit(): void {
  }
  loaddata()
  {
    // this.regestrationform.setValue({
    //   username:'ehab',
    //   passowred:'123',
    //   confirmpassowred:'123',
    //   address:{
    //     city:'elmenia',
    //     street:'dermouse',
    //     postalcode:'71111'
    this.regestrationform.patchValue({
      username:'ehab',
      // passowred:'123',
      // confirmpassowred:'123',
      address:{
        city:'elmenia',
        street:'dermouse',
        postalcode:'71111'
      }

    });
  }

}
