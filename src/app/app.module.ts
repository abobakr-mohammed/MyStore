import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './orderproduct/order/order.component';
import { ProductliComponent } from './orderproduct/productli/productli.component';
import { CopunbyserviceComponent } from './serviceproduct/copunbyservice/copunbyservice.component';
import { NotfinedComponent } from './notfined/notfined.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { SelectedproductComponent } from './selectedproduct/selectedproduct.component';
import{ HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { ServecorderComponent } from './servecorder/servecorder.component';
import { UsersComponent } from './users/users.component';
import { PostComponent } from './post/post.component';
import { TdfComponent } from './tdf/tdf.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { observable } from 'rxjs';
import { RegesterComponent } from './regester/regester.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    SidebarComponent,
    ProductlistComponent,
    OrderComponent,
    ProductliComponent,
    CopunbyserviceComponent,
    NotfinedComponent,
    UserloginComponent,
    MainlayoutComponent,
    SelectedproductComponent,
    ParentComponent,
    ServecorderComponent,
    UsersComponent,
    PostComponent,
    TdfComponent,
    ReactiveformComponent,
    RegesterComponent,
    LoginComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
