import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from './core/services/shared.service';
import { COMMON_CONSTANTS } from 'src/app/shared/constants/common.constant';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cart';
  toasterValues: any;
  showToasterMessage = false;
  toasterMessageSubscriber: Subscription;
  constructor(private sharedService: SharedService) { }
  ngOnInit() {
    this.setListenerForToasterMessage();
  }
  setListenerForToasterMessage() {
    this.toasterMessageSubscriber = this.sharedService.setListenForToasterMessage().subscribe(data => {
      console.log('toaster data: ', data);
      if (data && data.message && data.type) {
        this.handleToastMessage(data.message, data.type);
      }
    });
  }
  handleToastMessage(message, type) {
    this.toasterValues = {
      type,
      message
    };
    this.showToasterMessage = true;
    setTimeout(() => {
      this.showToasterMessage = false;
    }, COMMON_CONSTANTS.TOASTER_MESSAGE_TIMEOUT_VALUE);
  }
}
