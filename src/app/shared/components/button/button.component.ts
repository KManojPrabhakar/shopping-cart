import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttonName: string;
  @Input() isButtonDisabled: boolean;
  @Input() showLoadingSymbol: boolean;
  @Output() emitButtonAction = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  handleButtonAction() {
    this.emitButtonAction.emit();
  }

}
