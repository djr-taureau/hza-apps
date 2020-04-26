import { Component, Input, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { CoreTable } from '@hza/ui-components/core-table';
import { Loan } from '@hza/shared/loans/models';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
	selector: 'hza-loans-table',
	templateUrl: './loans-table.component.html',
	styleUrls: ['./loans-table.component.scss']
})
export class LoansTableComponent extends CoreTable<Loan> implements OnInit, AfterViewInit {
	
	placeholderHeight = 0;
	@Input() set loans(loans: Loan[]) {
		// sets dataSource on CoreTable
		if (loans) {
			this.set(loans);
		}
	}
	@Input() sticky: boolean;

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
		console.log('whgat to to')
		// this is how you could recalculate the sticky header position on scrol
	}
	ngAfterViewInit() {
		console.log('whgat to to')
	}
	
	copy(value) {
		console.log(value);
		this.clipboard.copy(value);
	}
}
