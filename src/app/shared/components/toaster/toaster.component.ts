import { Component, OnInit, Input } from '@angular/core';
import { COMMON_CONSTANTS } from 'src/app/shared/constants/common.constant';
@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {
  @Input() type: string;
  @Input() message: string;
  notifyClass = 'toaster toaster__success';
  showToaster = true;
  constructor() { }

  ngOnInit() {
    const that = this;
    if (this.type === 'warning') {
      this.notifyClass = 'toaster toaster__warning';
    } else  if (this.type === 'error') {
      this.notifyClass = 'toaster toaster__error';
    } else  if (this.type === 'info') {
      this.notifyClass = 'toaster toaster__info';
    }

    setTimeout(() => {
      that.showToaster = false;
    }, COMMON_CONSTANTS.TOASTER_MESSAGE_TIMEOUT_VALUE);
  }

}
