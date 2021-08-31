import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GodDetailsComponent} from "./god-details/god-details.component";
import {MainPageComponent} from "./main-page/main-page.component";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'gods',
    component: MainPageComponent
  },
  {
    path: 'gods/:id/details',
    component: GodDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
