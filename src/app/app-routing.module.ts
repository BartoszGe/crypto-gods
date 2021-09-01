import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GodDetailsComponent} from "./god-details/god-details.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {BlockchainResolve} from "./block-chain/blockchain.resolve";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    resolve: {
      blockchain: BlockchainResolve
    }
  },
  {
    path: 'gods/:id/details',
    component: GodDetailsComponent,
    resolve: {
      blockchain: BlockchainResolve
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
