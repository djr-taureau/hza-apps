import { Component, OnInit, OnChanges, Input, ViewChild, SimpleChanges } from '@angular/core';
import { Documents, Document } from '../../models/document.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
	selector: 'hza-doc-data-list',
	templateUrl: './doc-data-list.component.html',
	styleUrls: ['./doc-data-list.component.scss']
})
export class DocDataListComponent implements OnInit, OnChanges {
	columns: string[] = ['select','DocFileName', 'DocType', 'FileSize', 'CreatedDated', 'CreatedBy', 'actions'];
	@Input() dataItems: Documents;
	@ViewChild(MatSort) sort: MatSort;
	dataSource: MatTableDataSource<Document>;
	selection = new SelectionModel<Document>(true, []);

	displayData: Documents;

	constructor() {}

	ngOnInit() {
		console.log(this.dataItems)
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log(this.dataItems)
		if (changes.dataItems) {
			this.dataSource = new MatTableDataSource(this.dataItems);
			this.dataSource.sort = this.sort;
		}
	}

	isAllSelected() {
		const numSelected = this.selection.selected.length;
		const numRows = this.dataSource.data.length;
		return numSelected === numRows;
	}

	masterToggle() {
		this.isAllSelected()
			? this.selection.clear()
			: this.dataSource.data.forEach((row) => this.selection.select(row));
	}
}
