import { Component, Input, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { CoreTable } from '@hza/ui-components/core-table';
import { Loan } from '@hza/shared/loans/models';

@Component({
	selector: 'hza-loans-list',
	templateUrl: './loans-list.component.html',
	styleUrls: ['./loans-list.component.scss']
})
export class LoansListComponent extends CoreTable<Loan> implements OnInit, AfterViewInit {

	placeholderHeight = 0;
	@Input() set loans(loans: Loan[]) {
		// sets dataSource on CoreTable
		if (loans) {
			this.set(loans);
		}
	}
	@Input() sticky: boolean;
	@Output() loanNumber = new  EventEmitter<string>();

	constructor(private clipboard: Clipboard) {
		// column definitions for CoreTable
		super([
			'source',
			'loanNumber',
			'borrower',
			'borrowerPrimarySSN',
			'borrowerPrimaryPhoneNumber',
			'borrowerPrimaryEmailAddress',
			'coBorrower',
			'borrowerSecondarySSN',
			'borrowerSecondaryPhoneNumber',
			'propertyAddress1',
			'propertyCity',
		]);
	}

	ngOnInit() {
		console.log('loan list init')
		console.log(this.loanNumber)
	}
	ngAfterViewInit() {
		console.log('loan list after view init')
	}
	copy(value) {
		console.log(value);
		this.clipboard.copy(value);
	}
}
