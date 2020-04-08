import { Component, OnInit, Input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { Loan } from '../../models/loan.model';

@Component({
	selector: 'hza-loans-list',
	templateUrl: './loans-list.component.html',
	styleUrls: ['./loans-list.component.scss']
})
export class LoansListComponent implements OnInit {
	opened: boolean;
	@Input() loans: Loan[];

	constructor(private clipboard: Clipboard) {}

	ngOnInit() {
		this.opened = false;
	}

	openModal() {
		this.opened = !this.opened;
	}

	copy(value) {
		return this.clipboard.copy(value);
	}
}
