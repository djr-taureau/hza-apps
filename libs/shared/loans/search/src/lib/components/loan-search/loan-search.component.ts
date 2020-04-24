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

	searchLoans($event: LoanQuery) {
		console.log('loan search', $event.loanSearch);
		this.query.emit($event);
		this.updateSearchBox($event.loanSearch)
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
		});
	}

	updateSearchBox(value: string) {
		this.searchBox.patchValue({
			loanSearchBox: value
		});
	}

	selected(value) {
		console.log(value);
	}
}
