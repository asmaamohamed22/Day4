import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { FavoriteProductsComponent } from './product/favorite-products/favorite-products.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:"", component: ProductListComponent},
  {path:"product", component: ProductListComponent},
  {path:"user", component: UserListComponent},
  {path:"login", component: LoginComponent},
  {path:"favourite", component: FavoriteProductsComponent},
  {path:"addProduct", component: AddProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
