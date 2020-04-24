import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { SelectionModel } from '@angular/cdk/collections';
import { FormBuilder, AbstractControl } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Loan } from '@hza/shared/loans/models';
import { trackByFn as ngUtilTrackBy } from '@hza/shared/utils';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
	selector: 'hza-loasn-list',
	templateUrl: './loans-list.component.html',
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({ height: '0px', minHeight: '0' })),
			state('expanded', style({ height: '*' })),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
		])
	],
	styleUrls: ['./loans-list.component.scss']
})
export class LoansListComponent implements OnInit, OnChanges {
	public trackByFn = ngUtilTrackBy;
	columns: string[] = [
		'select',
		'source',
		'loanNumber',
		'borrower',
		'borrowerPrimarySSN',
		'borrowerPrimaryPhoneNumber',
		'borrowerPrimaryEmail',
		'coBorrower',
		'borrowerSecondarySSN',
		'borrowerSecondaryPhoneNumber',
		'propertyAddress',
		'propertyCity'
	];

	@ViewChild(MatSort) sort: MatSort;
	dataSource: MatTableDataSource<Loan>;
	selection = new SelectionModel<Loan>(true, []);
	expandedElement: Loan | null;
	readonly formControl: AbstractControl;
	displayData: Loan[];
	@Input() loans: Loan[];
	// @Input() selectedDocument: Document;
	@Output() selectedLoan = new EventEmitter<number>();

	constructor(private clipboard: Clipboard, formBuilder: FormBuilder) {}

	ngOnInit() {
		console.log(this.loans);
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.documents) {
			this.dataSource = new MatTableDataSource(this.loans);
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
	selectLoan(loanNumber) {
		this.selectedLoan.emit(loanNumber);
	}
}
