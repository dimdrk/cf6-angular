import { Component } from '@angular/core';
import { EPerson, ManyPerson } from '../../shared/interfaces/person';
import { sortBy } from 'lodash-es';

@Component({
    selector: 'app-simple-datatable',
    standalone: true,
    imports: [],
    templateUrl: './simple-datatable.component.html',
    styleUrl: './simple-datatable.component.css'
})
export class SimpleDatatableComponent {
    manyPerson = ManyPerson;

    sortOrder = {
        givenName: 'none',
        surName: 'none',
        age: 'none',
        email: 'none',
        address: 'none'
    }

	sortData(sortKey: keyof EPerson): void {
		if (this.sortOrder[sortKey] === 'asc') {
			this.sortOrder[sortKey] = 'dsc';
			this.manyPerson = sortBy(this.manyPerson, sortKey).reverse();
		} else {
		this.sortOrder[sortKey] = 'asc';
		this.manyPerson = sortBy(this.manyPerson, sortKey);
		}
	}
}
