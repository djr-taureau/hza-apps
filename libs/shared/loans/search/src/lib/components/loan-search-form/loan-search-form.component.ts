import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { searchMessages } from '@hza/shared/loans/models';
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

	loanSearchBox = new FormControl('');

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.searchForm = this.fb.group({
			company: '0',
			loan: 'loan',
			loanSearch: ''
		});
		this.searchForm.valueChanges.subscribe(console.log);
		// let idx = this.searchType.getValue();
		this.searchTypeSubject$.next(this.searchForm.get('loan').value);
		// this.searchHelpMessage = searchMessages('loan')
		this.searchForm.get('loan').valueChanges.subscribe((v) => {
			this.searchTypeSubject$.next(v);
		});
		this.searchTypeSubject$.subscribe((val) => {
			this.searchHelpMessage = searchMessages(val);
		});
	}

	searchLoans($event) {
		console.log($event);
		// const loanQuery: LoanQuery = this.form.value;
		// this.query.emit(loanQuery);
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
