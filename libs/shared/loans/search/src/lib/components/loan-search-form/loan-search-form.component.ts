import {
	ChangeDetectionStrategy,
	Component,
	OnInit,
	ViewChild,
	ElementRef,
	Output,
	EventEmitter,
	Input,
	OnChanges,
	AfterViewInit
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { searchMessages, LoanQuery, defaultQuery, toSearchFormValue } from '@hza/shared/loans/models';
import { BehaviorSubject } from 'rxjs';

@Component({
	selector: 'hza-loan-search-form',
	templateUrl: './loan-search-form.component.html',
	styleUrls: ['./loan-search-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoanSearchFormComponent implements OnInit, OnChanges, AfterViewInit {
	loanSearchComponentResponse = null;

	faTimes = faTimes;
	faTimesCircle = faTimesCircle;
	searchHelpMessage: string;
	searchQuerySubject$ = new BehaviorSubject<LoanQuery>(defaultQuery);
	searchTypeSubject$ = new BehaviorSubject<string>(null);
	@Input() loanQuery: LoanQuery;
	@Output() query = new EventEmitter<LoanQuery>();

	// loanSearchBox = new FormControl('');

	searchForm = this.fb.group({
		company: ['0'],
		loan: ['loan'],
		loanSearch: ['']
	});

	controls = {
		company: this.searchForm.get('company'),
		loan: this.searchForm.get('loan'),
		loanSearch: this.searchForm.get('loanSearch')
	};

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.searchForm = this.fb.group(this.searchQuerySubject$.value);
		this.searchTypeSubject$.next(this.searchForm.get('loan').value);
		this.searchForm.get('loan').valueChanges.subscribe((v) => {
			this.searchTypeSubject$.next(v);
		});
		this.searchTypeSubject$.subscribe((val) => {
			this.searchHelpMessage = searchMessages(val);
		});
		this.searchQuerySubject$.subscribe((v) => console.log('query', v));
		this.searchForm.valueChanges.subscribe(console.log);
		this.searchForm.valueChanges.subscribe(v => {
			console.log(v)
		});
		// if (this.loanQuery) {
		// 	this.searchForm.setValue(this.loanQuery);
		// }
	}
	
	ngAfterViewInit() {
		if (this.loanQuery) {
			this.searchForm.setValue(this.loanQuery);
		}
	}

	ngOnChanges() {
		// this.searchQuerySubject$.next(this.loanQuery);
		// this.searchForm.value = this.searchQuerySubject$.value
			if (this.loanQuery) {
			this.searchForm.setValue(this.loanQuery);
		}
		// console.log('search form', this.loanQuery.company);
	}
	searchLoans($event) {
		const loanQuery: LoanQuery = this.searchForm.value;
		this.query.emit(loanQuery);
	}
	clear() {
		this.searchForm.patchValue({
			loanSearch: ''
		});
	}
	//   updateSearchBox() {
	// 	this.loanSearchBox.setValue(this.form.get('loanSearch').value);
	// }
}
