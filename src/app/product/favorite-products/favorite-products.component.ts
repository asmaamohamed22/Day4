import { ProductService } from './../../_services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-favorite-products',
  templateUrl: './favorite-products.component.html',
  styleUrls: ['./favorite-products.component.css']
})
export class FavoriteProductsComponent implements OnInit {
  favProducts: Product[] =[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.favProducts = this.productService.getFavProducts();
  }


}
