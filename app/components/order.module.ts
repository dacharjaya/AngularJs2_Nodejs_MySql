import { NgModule, OnInit } 		from '@angular/core';
import { OrderComponent } 	from './order.component';
import { CommonModule }		from '@angular/common';
import { FormsModule }		from '@angular/forms'
import { HttpModule }				from '@angular/http';

import { OrderService }		from './order.service';

@NgModule({
	imports: [CommonModule, FormsModule, HttpModule],
	declarations: [OrderComponent],
	exports: [OrderComponent],
	providers: [OrderService]
})

export class OrderModule {
	
}