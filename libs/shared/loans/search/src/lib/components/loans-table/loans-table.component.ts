import { Component, Input } from '@angular/core';
import { CoreTable } from '@hza/ui-components/core-table';
import { Loan } from '@hza/shared/loans/models';

@Component({
	selector: 'hza-loans-table',
	templateUrl: './loans-table.component.html',
	styleUrls: ['./loans-table.component.scss']
})
export class LoansTableComponent extends CoreTable<Loan> {
	@Input()
	set loans(loans: Loan[]) {
		// sets dataSource on CoreTable
		if (loans) {
			this.set(loans);
		}
	}

	@Input() sticky: boolean;

	constructor() {
		// column definitions for CoreTable
		super([
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
			'propertyCity',
			'actions'
		]);
	}

	onInit() {
		// this is how you could recalculate the sticky header position on scroll
		this.viewport.renderedRangeStream.subscribe(() => {
			const el = this.viewport.elementRef.nativeElement;
			// the magicNumber can be calculated using all of:
			// el.scrollTop; el.clientHeight; rowHeight; viewport.offset.
			// but it's a hassle so let's just fix a pretty ok one here
			const magicNumber = 312;
			const offset = Math.min(magicNumber, this.viewport.getOffsetToRenderedContentStart());
			el.style.setProperty('--offset', `-${offset}px`);
		});
	}
}
