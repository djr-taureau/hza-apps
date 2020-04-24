import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { searchMessages, LoanQuery } from '@hza/shared/loans/models';
import { BehaviorSubject } from 'rxjs';

@Component({
	selector: 'hza-loan-search-form',
	templateUrl: './loan-search-form.component.html',
	styleUrls: ['./loan-search-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoanSearchFormComponent implements OnInit {
	loanSearchComponentResponse = null;
	searchForm: FormGroup;
	faTimes = faTimes;
	faTimesCircle = faTimesCircle;
	searchHelpMessage: string;
	searchTypeSubject$ = new BehaviorSubject<string>(null);
	
	@Output() query = new EventEmitter<LoanQuery>();

	loanSearchBox = new FormControl('');
	// @ViewChild('searchFocus') public searchFocus: ElementRef;
	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.searchForm = this.fb.group({
			company: '0',
			loan: 'loan',
			loanSearch: ''
		});
		// this.setSearchFocus();
		this.searchForm.valueChanges.subscribe(console.log);
		this.searchTypeSubject$.next(this.searchForm.get('loan').value);
		this.searchForm.get('loan').valueChanges.subscribe((v) => {
			this.searchTypeSubject$.next(v);
		});
		this.searchTypeSubject$.subscribe((val) => {
			this.searchHelpMessage = searchMessages(val);
		});
	}


	// public setSearchFocus() {
  	// 	this.searchFocus.nativeElement.focus();
	// }
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
