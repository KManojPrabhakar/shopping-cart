import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  shoppingItems: any;
  buttonName: string;
  cartData: any;
  constructor(private homeService: HomeService, private sharedService: SharedService) { }
  ngOnInit() {
    this.getShoppingItems();
    this.buttonName = 'add to cart';
    this.cartData = [];
  }
  getShoppingItems() {
    this.shoppingItems = this.sharedService.getShoppingItems();
  }

  trackByItemId( index: number, item: any): string {
    console.log('trackByItemId data', item);
    return item.id;
  }
  handleOptionChange(event) {
    console.log('option value', event.target.value);
    const value = event.target.value;
    this.sortShoppingItems(value);
  }
  sortShoppingItems(value) {
    if (value.includes('asc')) {
      this.shoppingItems.sort((a, b) =>  {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
      });
    } else if (value.includes('categ')){
      this.shoppingItems.sort((a, b) =>  {
        if (a.category < b.category) { return -1; }
        if (a.category > b.category) { return 1; }
        return 0;
      });
    }
    console.log(' addToCart data', this.shoppingItems);

  }
  addToCart(data) {
    this.sharedService.addToCart(data);
    this.getShoppingItems();
  }

}
