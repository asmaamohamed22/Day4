import { Product } from './../Product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
 
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() productData?: any;
  @Output() getProductData = new EventEmitter<Product>();
  constructor() { 
     
  }

  ngOnInit(): void {
  }
  getProduct(product: Product) {
    this.getProductData.emit(product);
  
}
}
