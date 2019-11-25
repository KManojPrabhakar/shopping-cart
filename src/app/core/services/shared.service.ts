import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Toaster } from 'src/app/shared/models/toaster.model';
import { ToasterType } from 'src/app/shared/constants/toaster-enum';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  shoppingItems: any;
  cartLength = 0;
  private toasterSubject: Subject<Toaster> = new Subject();

  constructor() {
    this.shoppingItems = [
      { name: 'Vivo', category: 'Mobile', quantity: 4, id: 1 },
      { name: 'Nokia', category: 'Mobile', quantity: 12, id: 2 },
      { name: 'Real me 5', category: 'Mobile', quantity: 4, id: 3 },
      { name: 'Mi 7', category: 'Mobile', quantity: 4, id: 4 },
      { name: 'Sony', category: 'TV', quantity: 1, id: 5 },
      { name: 'Opp0', category: 'Mobile', quantity: 41, id: 6 },
      { name: 'Honor 8', category: 'Mobile', quantity: 5, id: 7 },
      { name: 'One plus 7', category: 'Mobile', quantity: 4, id: 8 },
      { name: 'Iphone 7', category: 'Mobile', quantity: 4, id: 9 },
      { name: 'LG', category: 'TV', quantity: 4, id: 10 },
      { name: 'Dell', category: 'Laptop', quantity: 7, id: 11 },
      { name: 'Hp', category: 'Computer', quantity: 4, id: 12 },
      { name: 'Lenovo', category: 'Laptop', quantity: 4, id: 13 },
      { name: 'Asus', category: 'Mobile', quantity: 4, id: 14 },
      { name: 'Syska', category: 'Powe bank', quantity: 4, id: 15 },
      { name: 'Philips', category: 'Power bank', quantity: 1, id: 16 },
      { name: 'Samsung Smart watch 7', category: 'Smart watch', quantity: 14, id: 17 },
      { name: 'Boat', category: 'Headphones', quantity: 21, id: 18 },
      { name: 'Thomson', category: 'TV', quantity: 4, id: 19 },
      { name: 'Samsung Power bank', category: 'Power bank', quantity: 4, id: 20 }
    ];
  }
  setListenForToasterMessage() {
    return this.toasterSubject.asObservable();
  }

  showToaster(type, message) {
    const data = {
      type,
      message
    };
    this.toasterSubject.next(data);
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
  addToCart(data) {
    console.log(' addToCart data', data);
    const findIndex = this.shoppingItems.findIndex((shoppingItem) => shoppingItem.id === data.id);
    if (this.shoppingItems[findIndex].isItemsAddedToCart) {
      this.shoppingItems[findIndex].isItemsAddedToCart = false;
      this.cartLength--;
    } else {
      this.shoppingItems[findIndex].isItemsAddedToCart = true;
      this.shoppingItems[findIndex].selectedQuantity = 1;
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
    if (this.shoppingItems[findIndex].selectedQuantity &&
      (this.shoppingItems[findIndex].selectedQuantity <= this.shoppingItems[findIndex].quantity)) {
      this.shoppingItems[findIndex].selectedQuantity = data.selectedQuantity;
      const message = 'Updated Cart Item Successfully';
      this.showToaster(ToasterType.SUCCESS, message);


    } else {
      // this.shoppingItems[findIndex].selectedQuantity = this.shoppingItems[findIndex].quantity;
      const message = 'Please select cart items less than or equal to available quantity';
      this.showToaster(ToasterType.ERROR, message);

    }
    console.log(' updateCartItem data', this.shoppingItems);
  }
}
