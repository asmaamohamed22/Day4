import { Product } from './../product/Product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productList: Product[]; 
  private favouriteList: Product[];
  constructor() {
    this.productList = this.productList = [
      new Product(1, "Guava", 20, "Guava is a fast growing evergreen shrub or small tree that can grow to a height.", "1.png"),
      new Product(2, "Blueberry", 25, "Blueberry is a crown forming, woody, perennial shrub in the family Ericaceae.", "2.png"),
      new Product(3, "Watermelon", 30, "The watermelon is a large fruit of a more or less spherical shape.", "3.png"),
      new Product(4, "Orange", 56, "The Orange is a large fruit of a more or less spherical shape. is a large fruit citrus species in the family Rutaceae.", "4.png"),
      new Product(5, "Halfmelow", 78, "The watermelon is a large fruit of a more or less spherical shape.", "5.png"),
      new Product(6, "Pomegranate", 63, "The pomegranate plant is a large shrub or small tree that has smooth. ", "6.png"),
      new Product(7, "Red Apple", 12, "The RdApple is a large fruit of a more or less spherical shape. having a positive role.", "7.png"),
      new Product(8, "Green Apple", 50, "Apple having a positive role in the achievement of nourish balance.", "8.png"),
    ];
    this.favouriteList = [];
  }
  getAllProducts() {
    return this.productList;
  }
  addProduct(product: Product) {
    this.productList.push(product);
  }
  addToFavList(product: Product) {
    this.favouriteList.push(product);
  }
  getFavProducts() {
    return this.favouriteList;
  }
  addNewProduct(product: Product) {
    this.productList.push(product);
  }
}
