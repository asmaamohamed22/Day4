import { ProductService } from './../../_services/product.service';
import { Product } from './../Product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  result: Product=new Product();
  constructor(private productService:ProductService) {
    this.productList = productService.getAllProducts();
   }

  ngOnInit(): void {
  }
  addToFavList(product: Product) {
    this.productService.addToFavList(product);
  }
}
