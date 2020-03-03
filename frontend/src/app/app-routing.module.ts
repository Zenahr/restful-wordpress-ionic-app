import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // {
  //   path: 'quotes',
  //   loadChildren: () => import('./quotes/quotes.module').then( m => m.QuotesPageModule)
  // },
  // {
  //   path: 'quotes-details',
  //   loadChildren: () => import('./quotes-details/quotes-details.module').then( m => m.QuotesDetailsPageModule)
  // },
  // {
  //   path: 'quote-details',
  //   loadChildren: () => import('./quote-details/quote-details.module').then( m => m.QuoteDetailsPageModule)
  // },
  // {
  //   path: 'edit-quote',
  //   loadChildren: () => import('./edit-quote/edit-quote.module').then( m => m.EditQuotePageModule)
  // },
  // {
  //   path: 'about',
  //   loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  // },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
