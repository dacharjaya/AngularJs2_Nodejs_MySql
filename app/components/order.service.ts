import { Injectable } 		from '@angular/core';
import { Http, Response } 	from '@angular/http';
import { Observable } 		from 'rxjs/Rx';

@Injectable()
export class OrderService {
	constructor(private http: Http){}
	dataUrl : 'http://localhost:3002/orderList'
	testResponse: any

	getOrderList() {
		return this.http.get('http://localhost:3002/orderList');
						

	}
	private extractData(res: Response) {
		debugger;
		let body = res.json();
		return body.data || { };
	}
}

