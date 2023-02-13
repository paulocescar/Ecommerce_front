import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { StoreModule } from "../store/store.module";
import { ModelModule } from '../model/model.module';
import { StoreComponent } from "../store/store.component";
import { CheckoutComponent } from "../store/checkout.component";
import { CartDetailComponent } from "../store/cartDetail.component";
import { FirstComponent } from './first.component';
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "../storeFirst.guard";

@NgModule({
  declarations: [FirstComponent],
  imports: [
    BrowserModule,
    StoreModule,
    ModelModule
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})

export class FirstModule { }