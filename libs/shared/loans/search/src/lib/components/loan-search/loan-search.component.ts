import { ComponentType } from '@angular/cdk/portal';
import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	ChangeDetectionStrategy,
	AfterViewInit
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Loan } from '@hza/shared/loans/models';
import { OverlayService, PopoverService } from '@hza/ui-components/overlay';
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import { LoanQuery } from '@hza/shared/loans/models';
import { LoanSearchFormComponent } from '../loan-search-form/loan-search-form.component';

@Component({
	selector: 'hza-loan-search',
	templateUrl: './loan-search.component.html',
	styleUrls: ['./loan-search.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoanSearchComponent implements OnInit, OnChanges, AfterViewInit {
	@Input() loansLoaded: boolean;
	@Input() loanQuery: LoanQuery;
	@Input() loans: Loan[];
	@Output() query = new EventEmitter<LoanQuery>();

	loadLoans: Boolean;

	faTimes = faTimes;
	faSearch = faSearch;
	searchBox = this.fb.group({
		loanSearch: ['']
	});

	controls = {
		loanSearchBox: this.searchBox.get('loanSearch')
	};

	constructor(private fb: FormBuilder, private popover: PopoverService) {}

	ngOnInit() {
		console.log('init loan search');
		this.searchBox = this.fb.group({
			loanSearch: ''
		});
	}

	ngOnChanges() {
		console.log('search', this.loans);
		console.log('search', this.loansLoaded);
		if (this.loanQuery) {
			this.searchBox.patchValue({
				loanSearch: this.loanQuery.loanSearch
			});
			console.log('search', this.loanQuery);
		}
	}

	ngAfterViewInit() {
		if (this.loanQuery) {
			this.searchBox.setValue(this.loanQuery);
		}
	}
	dispatch($event) {
		console.log($event);
	}

	clear() {
		this.searchBox.patchValue({
			loanSearch: ''
		});
	}

	searchLoans($event: LoanQuery) {
		console.log('loan search', $event.loanSearch);
		this.query.emit($event);
		this.updateSearchBox($event.loanSearch);
	}

	show(content: ComponentType<LoanSearchFormComponent>, origin) {
		const ref = this.popover.open<{ values: string[] }>({
			content,
			origin,
			data: {
				values: ['1', '2', '3']
			}
		});

		ref.afterClosed$.subscribe((res) => {
			console.log('show', res);
			this.updateSearchBox(this.loanQuery.loanSearch)
		});
	}

	updateSearchBox(value: string) {
		this.searchBox.patchValue({
			loanSearch: value
		});
	}

	selected(value) {
		console.log(value);
	}
}
