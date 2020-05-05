import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { SelectionModel } from '@angular/cdk/collections';
import { FormBuilder, AbstractControl } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Document } from '../../models/document.model';
import { trackByFn as ngUtilTrackBy } from '@hza/shared/utils';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
	selector: 'hza-doc-list',
	templateUrl: './doc-list.component.html',
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({ height: '0px', minHeight: '0' })),
			state('expanded', style({ height: '*' })),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
		])
	],
	styleUrls: ['./doc-list.component.scss']
})
export class DocListComponent implements OnInit, OnChanges {

	columns: string[] = ['select', 'Extension', 'DocFileName', 'DocType', 'FileSize', 'CreatedBy', 'CreatedDate'];

	@ViewChild(MatSort) sort: MatSort;
	dataSource: MatTableDataSource<Document>;
	selection = new SelectionModel<Document>(true, []);
	expandedDetail: Document | null;
	readonly formControl: AbstractControl;
	displayData: Document[];
	@Input() documents: Document[];
	// @Input() selectedDocument: Document;
	@Output() selectedDoc = new EventEmitter<number>();

	constructor(private clipboard: Clipboard, formBuilder: FormBuilder) {
		// this.dataSource.filterPredicate = ((data, filter) => {
		// 	const a = !filter.docFileName || data.docFileName.toLowerCase().includes(filter.docFileName);
		// 	const b = !filter.createdBy || data.createdBy.toLowerCase().includes(filter.createdBy);
		// 	const c = !filter.docType || data.docType.toLowerCase().includes(filter.docType);
		// 	return a && b && c;
		// }) as (Document, string) => boolean;

		// this.formControl = formBuilder.group({
		// 	docFilename: '',
		// 	createdBy: '',
		// 	docType: ''
		// });
		// this.formControl.valueChanges.subscribe((value) => {
		// 	const filter = {
		// 		...value,
		// 		docFileName: value.docFileName.trim().toLowerCase(),
		// 		createdBy: value.createdBy.trim().toLowerCase(),
		// 		docType: value.docType.trim().toLowerCase()
		// 	} as string;
		// 	this.dataSource.filter = filter;
		// });
	}

	ngOnInit() {
		console.log(this.documents);
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.documents) {
			this.dataSource = new MatTableDataSource(this.documents);
			this.dataSource.sort = this.sort;
		}
	}

	isAllSelected() {
		const numSelected = this.selection.selected.length;
		const numRows = this.dataSource.data.length;
		return numSelected === numRows;
	}

	copy(value) {
		console.log(value);
		this.clipboard.copy(value);
	}
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	/** Selects all rows if they are not all selected; otherwise clear selection. */
	masterToggle() {
		this.isAllSelected()
			? this.selection.clear()
			: this.dataSource.data.forEach((row) => this.selection.select(row));
	}
	selectDoc(docId) {
		this.selectedDoc.emit(docId);
	}
}