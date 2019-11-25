import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  shoppingItems: any;
  cartLength = 0;
  constructor() {
    this.shoppingItems = [
      {name: 'Honor6x', category: 'Mobile', quantity: 4 , id:  1},
      {name: 'Nokia', category: 'Mobile', quantity: 12 , id: 2},
      {name: 'Real me 5', category: 'Mobile', quantity: 4, id: 3 },
      {name: 'Mi 7', category: 'Mobile', quantity: 4, id: 4 },
      {name: 'Realme  7', category: 'Mobile', quantity: 4, id: 5 },
      {name: 'Honor 7', category: 'Mobile', quantity: 4, id: 6 },
      {name: 'Honor 7', category: 'Mobile', quantity: 4, id: 7 },
      {name: 'One plus 7', category: 'Mobile', quantity: 4, id: 8 },
      {name: 'Iphone 7', category: 'Mobile', quantity: 4, id: 9 },
      {name: 'Honor 7', category: 'Mobile', quantity: 4, id: 10 },
      {name: 'Dell', category: 'Laptop', quantity: 4, id: 11},
      {name: 'Hp', category: 'Computer', quantity: 4, id: 12},
      {name: 'Honor 7', category: 'Mobile', quantity: 4, id: 13},
      {name: 'Honor 7', category: 'Mobile', quantity: 4, id: 14},
      {name: 'Honor 7', category: 'Mobile', quantity: 4, id: 15},
      {name: 'HTC', category: 'Mobile', quantity: 4, id: 16},
      {name: 'Honor 7', category: 'Mobile', quantity: 4, id: 17},
      {name: 'Honor 7', category: 'Mobile', quantity: 4, id: 18},
      {name: 'Honor 7', category: 'Mobile', quantity: 4, id: 19},
      {name: 'Samsung 7', category: 'Mobile', quantity: 4, id: 20}
    ];
   }
  numberOnly(event): boolean {
    if (event && event.target) {
      const value = event.target.value;
      const charCode = (event.which) ? event.which : event.keyCode;
      if (charCode === 46 && value.split('.').length > 1) {
        return false;
      }
      if (charCode === 46 && (value.split('.').length <= 1)) {
        return true;
      }
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
      }
      if (value && Number(value) === 0) {
        return false;
      }
      return true;
    }
  }
  storeShoppingItems(data) {
    this.shoppingItems = data;
  }
  getShoppingItems() {
    return this.shoppingItems;
  }
  setCartItems(data) {
    sessionStorage.setItem('cartsData', JSON.stringify(data));
  }
  getCartItems() {
    return sessionStorage.getItem('cartsData');

  }
  addToCart(data) {
    console.log(' addToCart data', data);
    const findIndex = this.shoppingItems.findIndex((shoppingItem) => shoppingItem.id === data.id);
    if (this.shoppingItems[findIndex].isItemsAddedToCart) {
      this.shoppingItems[findIndex].isItemsAddedToCart   = false;
      this.cartLength--;
    } else {
      this.shoppingItems[findIndex].isItemsAddedToCart   = true;
      this.shoppingItems[findIndex].selectedQuantity   = 1;
      this.cartLength++;

    }
    console.log(' addToCart data', this.shoppingItems);
  }
  getCartLength() {
    return this.cartLength;
  }
  updateCartItem(data) {
    console.log(' updateCartItem data', data);
    const findIndex = this.shoppingItems.findIndex((shoppingItem) => shoppingItem.id === data.id);
    if (this.shoppingItems[findIndex].selectedQuantity <= this.shoppingItems[findIndex].quantity) {
      this.shoppingItems[findIndex].selectedQuantity   = data.selectedQuantity;
    } else {
     this.shoppingItems[findIndex].selectedQuantity   = this.shoppingItems[findIndex].quantity;

    }
    console.log(' updateCartItem data', this.shoppingItems);
  }
}
