import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { products } from '../../products'
import {CartService}  from '../cart.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute,private cartService : CartService) { }
product;

addToCart(product){
  this.cartService.addToCart(product);
  window.alert('Your product has been added to the cart!');
}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('productId')
    this.product = products.find(product=>product.id === +productIdFromRoute)
  }

}