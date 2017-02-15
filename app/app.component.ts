import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  	<div class="panel panel-primary container">
	  	<h1 class="panel-heading">
	  		Order List
	  	</h1>
		<order> </order> 
	</div>
  	`,
})
export class AppComponent  { name = 'Deep!'; }
