import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
	items: string[] = ['Bread', 'Butter', 'Salt']

	getItems():string[]{
		return this.items;
	}

	addItems(item){
		this.items.push(item);
		return this.items;
	}

  	constructor() { }

}
