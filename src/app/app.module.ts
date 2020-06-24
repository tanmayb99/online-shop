import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapNavbarComponent } from './bootstrap-navbar/bootstrap-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgbModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        { path: 'products', component: ProductsComponent },
        { path: 'shopping-cart', component: ShoppingCartComponent },
        { path: 'checkout', component: CheckoutComponent },
        { path: 'order-success', component: OrderSuccessComponent },
        { path: 'login', component: LoginComponent },
        { path: 'admin/products', component: AdminProductsComponent },
        { path: 'admin/orders', component: AdminOrdersComponent },
        { path: 'my/orders', component: MyOrdersComponent },
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
