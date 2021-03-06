import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { ToasterComponent } from './components/toaster/toaster.component';
const Components  = [CardComponent, ButtonComponent, ToasterComponent];

@NgModule({
  declarations: [...Components],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [...Components]
})
export class SharedModule { }
