import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { SelectionModel } from '@angular/cdk/collections';
import { FormBuilder, AbstractControl } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Loan } from '@hza/shared/loans/models';
import { trackByFn as ngUtilTrackBy } from '@hza/shared/utils';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { loansArr } from './loansArr';

@Component({
	selector: 'hza-loans-list',
	templateUrl: './loans-list.component.html',
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({ height: '0px', minHeight: '0' })),
			state('expanded', style({ height: '*' })),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
		])
	],
	styleUrls: ['./loans-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoansListComponent implements OnInit, OnChanges {
	opened: boolean;
	// loans = loansArr;
	readonly formControl: AbstractControl;
	
    @Input()
    public set loans(value: Loan[]) {
        if (value) {
			this.dataSource = new MatTableDataSource(value);
			this.dataSource.sort = this.sort;
        }
    }
    public get loans(): Loan[] {
        return this._loans;
    }
	@ViewChild(MatSort) sort: MatSort;
	@Output() selectedLoan = new EventEmitter<number>();
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

	dataSource: MatTableDataSource<Loan>;
	selection = new SelectionModel<Loan>(true, []);

	displayData: Loan[];

	constructor(private clipboard: Clipboard) {}

	private _loans: Loan[];
	ngOnInit() {
		this.opened = false;
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.loans) {
			this.dataSource = new MatTableDataSource(this.loans);
			this.dataSource.sort = this.sort;
		}
	}

	openModal() {
		this.opened = !this.opened;
	}

	copy(value) {
		return this.clipboard.copy(value);
	}

	selectLoan(loanNumber) {
		this.selectedLoan.emit(loanNumber);
	}
}
