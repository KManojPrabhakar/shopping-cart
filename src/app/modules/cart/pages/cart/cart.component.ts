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
   return this.sharedService.getCartLength();
  }
  updateCartItem(data) {
    this.sharedService.updateCartItem(data);
  }
  handleOptionChange(event) {
    console.log('option value', event.target.value);
    const value = event.target.value;
    this.sortShoppingItems(value);
  }
  sortShoppingItems(value) {
    if (value.includes('asc')) {
      this.cartData.sort((a, b) =>  {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
      });
    } else if (value.includes('categ')){
      this.cartData.sort((a, b) =>  {
        if (a.category < b.category) { return -1; }
        if (a.category > b.category) { return 1; }
        return 0;
      });
    }
    console.log(' sortShoppingItems data', this.cartData);

  }

}
