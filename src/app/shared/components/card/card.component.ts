import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/core/services/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: any;
  @Input() buttonName: string;
  @Input() showInputQuantity: boolean;

  @Output() emitButtonAction = new EventEmitter<any>();
  @Output() emitUpdateCartItem = new EventEmitter<any>();

  selectedQuantity: number;
  constructor(private sharedService: SharedService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.selectedQuantity = this.card.selectedQuantity ? this.card.selectedQuantity : 1;
  }
  handleButtonAction(data) {
    data.selectedQuantity = this.selectedQuantity;
    this.emitButtonAction.emit(data);
  }
  handleUpdateCartItem(data) {
    data.selectedQuantity = Number(this.selectedQuantity);
    this.emitUpdateCartItem.emit(data);
  }
  numberOnly(event) {
    return this.sharedService.numberOnly(event);
  }

}
