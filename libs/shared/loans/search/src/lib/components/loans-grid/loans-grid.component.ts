import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../../models/document.model';


@Component({
	selector: 'fay-docs-grid',
	templateUrl: './docs-grid.component.html',
	styleUrls: [
		'./docs-grid.component.scss'
	]
})
export class DocsGridComponent implements OnInit {

@Input() public documents: Document[];
columnDefs = [
    {headerName: 'Doc Name', field: 'DocFileName', sortable: true, filter: true},
    {headerName: 'Doc Type', field: 'DocType', sortable: true, filter: true},
    {headerName: 'Created', field: 'CreatedDated', sortable: true, filter: true},
    {headerName: 'Created By', field: 'CreatedBy', sortable: true, filter: true}

];


	constructor() {}

	ngOnInit() {
		console.log('load')
	}

}
