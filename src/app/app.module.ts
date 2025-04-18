import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListModule } from './product-list/product-list.module';
import { ProductDetailListModule } from './product-detail-list/product-detail-list.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductListModule,
    ProductDetailListModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule 
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }