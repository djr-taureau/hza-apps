import { ComponentType } from '@angular/cdk/portal';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Loan } from '@hza/shared/loans/models';
import { OverlayService, PopoverService } from '@hza/ui-components/overlay';
import { BehaviorSubject, Observable } from 'rxjs';
import { searchMessages, LoanQuery } from '@hza/shared/loans/models';
import { LoanSearchFormComponent } from '../loan-search-form/loan-search-form.component';

@Component({
	selector: 'hza-loan-search',
	templateUrl: './loan-search.component.html',
	styleUrls: ['./loan-search.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoanSearchComponent implements OnInit, OnChanges {
	loanSearchFormComponent = LoanSearchFormComponent;
	searchBox: FormGroup;
	@Input() loansLoaded: boolean;
	@Input() loans: Loan[];
	@Output() query = new EventEmitter<LoanQuery>();

	loadLoans: Boolean;

	constructor(private fb: FormBuilder, private popover: PopoverService, private overlayService: OverlayService) {}

	ngOnInit() {
		console.log('init loan search');
			this.searchBox = this.fb.group({
			loanSearchBox: ''
		});
	}

	ngOnChanges() {
		console.log('search', this.loans);
		console.log('search', this.loansLoaded);
	}

	dispatch($event) {
		console.log($event);
	}

	clear() {
		this.searchBox.patchValue({
			loanSearchBox: ''
		});
	}

	searchLoans($event) {
		console.log($event);
		// const loanQuery: LoanQuery = this.form.value;
		// this.query.emit(loanQuery);
	}

	show(content: ComponentType<LoanSearchFormComponent>, origin) {
		const ref = this.popover.open<{ skills: number[] }>({
			content,
			origin,
			data: {
				skills: [1, 2, 3]
			}
		});

		ref.afterClosed$.subscribe((res) => {
			console.log('show', res);
			this.updateSearchBox();
			// console.log(this.form.get('loanSearch').value);
		});
	}

	updateSearchBox() {
		// this.searchBox.setValue(this.form.get('loanSearch').value);
	}

	selected(value) {
		console.log(value);
	}
}
