import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ShopControlsComponent } from './foundation/shop-controls/shop-controls.component';
import { FormsModule } from '@angular/forms';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CartComponent } from './components/cart/cart.component';
import { BackButtonComponent } from './foundation/back-button/back-button.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavComponent,
    FooterComponent,
    HomePageComponent,
    ProductsPageComponent,
    ProductDetailPageComponent,
    ProductDetailComponent,
    ShopControlsComponent,
    CartPageComponent,
    CartComponent,
    BackButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
