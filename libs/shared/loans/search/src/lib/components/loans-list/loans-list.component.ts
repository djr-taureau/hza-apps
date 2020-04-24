import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { FormBuilder } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Loan } from '@hza/shared/loans/models';
import { LoansFacade } from '@hza/shared/loans/data-access/state';

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
export class LoansListComponent implements OnInit {
	
	@Input() loans: Loan[];
	// @Input() selectedDocument: Document;
	@Output() selectedLoan = new EventEmitter<number>();

	constructor(private loansFacade: LoansFacade) {}

	ngOnInit() {
		console.log('loan list', this.loans);
		this.loansFacade.loans$.subscribe(v => console.log('loan list', v));
	}




}
