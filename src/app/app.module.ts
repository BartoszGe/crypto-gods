import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {GodComponent} from './main-page/god/god.component';
import {CommonModule} from "@angular/common";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import {GodDetailsComponent} from './god-details/god-details.component';
import { MainPageComponent } from './main-page/main-page.component';
import {StoreModule} from "@ngrx/store";
import {MatTableModule} from "@angular/material/table";
import {BlockchainResolve} from "./block-chain/blockchain.resolve";
import {reducers} from "./store/core.selector";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    GodComponent,
    GodDetailsComponent,
    MainPageComponent
  ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        NgbModule,
        MatButtonToggleModule,
        MatButtonModule,
        StoreModule.forRoot(reducers),
        MatTableModule,
        FontAwesomeModule,
    ],
  providers: [BlockchainResolve],
  bootstrap: [AppComponent]
})
export class AppModule {
}
