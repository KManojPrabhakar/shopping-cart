import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartData: any;
  showInputQuantity = true;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.getCartsData();
  }
  getCartsData() {
    this.cartData = this.sharedService.getShoppingItems();
    console.log('carts Data', this.cartData);
  }
  removeItem(data) {
    console.log(' removeItem data', data);
    this.sharedService.addToCart(data);
    this.getCartsData();

  }
  getcartLength() {
    this.sharedService.getCartLength();
  }
  updateCartItem(data) {
    this.sharedService.updateCartItem(data);
  }

}
