import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailListRoutingModule } from './product-detail-list-routing.module';
import { ProductDetailListComponent } from './product-detail-list.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

const routes: Routes = [
  { path: '', component: ProductDetailListComponent  }
];

@NgModule({
  declarations: [
    ProductDetailListComponent
  ],
  exports: [ 
    ProductDetailListComponent
  ],
  imports: [
    CommonModule,
    ProductDetailListRoutingModule,
    ProgressSpinnerModule,
    CardModule,
    ButtonModule,
    DialogModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductDetailListModule { }
