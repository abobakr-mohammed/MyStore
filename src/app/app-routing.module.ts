import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { NotfinedComponent } from './notfined/notfined.component';
import { OrderComponent } from './orderproduct/order/order.component';
import { ProductliComponent } from './orderproduct/productli/productli.component';
import { PostComponent } from './post/post.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductsComponent } from './products/products.component';
import { RegesterComponent } from './regester/regester.component';
import { SelectedproductComponent } from './selectedproduct/selectedproduct.component';
import { ServecorderComponent } from './servecorder/servecorder.component';
import { CopunbyserviceComponent } from './serviceproduct/copunbyservice/copunbyservice.component';
import { TdfComponent } from './tdf/tdf.component';

import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersComponent } from './users/users.component';



const routes: Routes = [
 {path:'',component:MainlayoutComponent,children:[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:ProductlistComponent}, 
 {path:'order',component:OrderComponent},
 {path:'products',component:ProductsComponent},
 {path: 'other',component:ProductsComponent},
{path:'serviceorder',component:ServecorderComponent},
 {path:'serviceorder/:pid',component:SelectedproductComponent},
 {path:'selectedproduct',component:SelectedproductComponent},
 {path:'users',component:UsersComponent},
 {path:'post',component:PostComponent},
 {path:'tdf',component:TdfComponent},
 {path:'login',component:LoginComponent},
 {path:'regest',component:RegesterComponent}
 ]},
 
 {path:'login',component:UserloginComponent},
 {path:'**',component:NotfinedComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
