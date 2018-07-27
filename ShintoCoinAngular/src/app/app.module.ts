import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { BuyComponent } from './buy/buy.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { MineComponent } from './mine/mine.component';
import { SellComponent } from './sell/sell.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    BuyComponent,
    DetailsComponent,
    HomeComponent,
    MineComponent,
    SellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
