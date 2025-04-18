import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail-list',
  templateUrl: './product-detail-list.component.html',
  styleUrl: './product-detail-list.component.scss'
})

export class ProductDetailListComponent implements OnInit {
  product: any;
  loading: boolean = true;
  showDialog: boolean = false; // 🔥 Dialog flag

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loading = true;
      this.productService.getProductById(+id).subscribe(data => {
        this.product = data;
        this.loading = false;
      });
    }
  }

  buyNow() {
    this.showDialog = true;
  }
}
