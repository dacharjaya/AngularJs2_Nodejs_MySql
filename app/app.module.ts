import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrderModule } 	 from './components/order.module';	

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, OrderModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
