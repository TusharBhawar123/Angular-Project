import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})

export class ProductListComponent implements OnInit {
  products: any[] = [];
  loading: boolean = true;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loading = true;
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.loading = false;
    });
  }
}