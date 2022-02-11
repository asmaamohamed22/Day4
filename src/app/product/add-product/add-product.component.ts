import { Router } from '@angular/router';
import { ProductService } from './../../_services/product.service';
import { Product } from './../Product';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProductForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required,Validators.minLength(4)]),
    description: new FormControl('', [Validators.required,Validators.minLength(4)]),
    image: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),

  });
  constructor(private productSrvices:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  onsubmit() {
    let product = new Product(60, this.title.value, this.price.value, this.description.value, this.image.value);
    this.productSrvices.addProduct(product);
    this.router.navigate(["product"]);
   
  }
  get title() {
    return this.addProductForm.get("title") as FormControl;
  }
  
  get description() {
    return this.addProductForm.get("description") as FormControl;
  }
  
  get image() {
    return this.addProductForm.get("image") as FormControl;
  }
 
  get price() {
    return this.addProductForm.get("price") as FormControl;
  }
}
