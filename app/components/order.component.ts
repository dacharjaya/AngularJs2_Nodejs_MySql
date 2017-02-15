import { Component, OnInit } from '@angular/core';
import { OrderService }		from './order.service';

@Component({
	selector: 'order',
	templateUrl: 'app/components/order.component.html'
})
export class OrderComponent implements OnInit{
	private orderList: any
	private statusList: [String]

	constructor(private orderSrvice: OrderService){
		this.statusList = ['CREATED', 'BEING_PROCESSED', 'SHIPPED','DELIVERED'];
	}

	ngOnInit(){
		this.orderSrvice.getOrderList()
						.subscribe(orders => {
							this.orderList = orders.json();
						});
		
	}
}
