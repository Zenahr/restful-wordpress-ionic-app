import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditQuotePageRoutingModule } from './edit-quote-routing.module';

import { EditQuotePage } from './edit-quote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditQuotePageRoutingModule
  ],
  declarations: [EditQuotePage]
})
export class EditQuotePageModule {}
