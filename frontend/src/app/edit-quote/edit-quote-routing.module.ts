import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditQuotePage } from './edit-quote.page';

const routes: Routes = [
  {
    path: '',
    component: EditQuotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditQuotePageRoutingModule {}
