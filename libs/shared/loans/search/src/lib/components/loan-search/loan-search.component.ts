import { ComponentType } from '@angular/cdk/portal';
import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	ChangeDetectionStrategy,
	AfterViewInit,
	TemplateRef
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Loan } from '@hza/shared/loans/models';
import { PopoverService } from '@hza/ui-components/overlay';
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import { LoanQuery } from '@hza/shared/loans/models';
import { LoanSearchFormComponent } from '../loan-search-form/loan-search-form.component';
import { OverlayRef } from '@angular/cdk/overlay';
import { PopoverRef } from '@hza/ui-components/overlay';

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
	@Output() loanNumber = new EventEmitter<string>();
	@Output() clearQuery = new EventEmitter<string>();
	loadLoans: Boolean;
	overlayRef: PopoverRef;
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
		this.searchBox = this.fb.group({
			loanSearch: ''
		});
	}

	ngOnChanges() {
		if (this.loanQuery) {
			this.searchBox.patchValue({
				loanSearch: this.loanQuery.loanSearch
			});
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
		this.clearQuery.emit('clear');
	}

	searchLoans($event: LoanQuery) {
		this.query.emit($event);
		this.updateSearchBox($event.loanSearch);
	}

	selectedLoan($event) {
		this.loanNumber.emit($event);
		this.overlayRef.close();
	}
	show(content: ComponentType<LoanSearchFormComponent>, origin) {
		this.overlayRef = this.popover.open<{ values: string[] }>({
			origin,
			content,
			
			data: {
				values: ['1', '2', '3']
			},
			width: '1600px',
			height: '300px'
		});

		this.overlayRef.afterClosed$.subscribe((res) => {
			if (this.loanQuery) {
				this.updateSearchBox(this.loanQuery.loanSearch);
			}
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
