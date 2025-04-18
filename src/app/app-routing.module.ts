import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailListComponent } from './product-detail-list/product-detail-list.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./product-list/product-list.module').then(
        m => m.ProductListModule
      )
  },
  {
    path: 'product-detail/:id',
    loadChildren: () =>
      import('./product-detail-list/product-detail-list.module').then(
        m => m.ProductDetailListModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }