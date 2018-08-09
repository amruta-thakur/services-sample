import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[DataService]
})
export class ListComponent implements OnInit {
	itemsRecieved: string[] = [''];
	
	addItem(form: any){
		this.dataService.addItems(form.value.itemText);
	}
	getDataFromServiceClass(){
		this.itemsRecieved = this.dataService.getItems();
		//to do later
	}
	constructor(private dataService:DataService) { }

	ngOnInit() {
	}

}
