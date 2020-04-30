import { Component, OnInit } from '@angular/core';
import { LoansFacade } from '@hza/shared/loans/data-access/state';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Loan } from '@hza/shared/loans/models';

@Component({
	selector: 'hza-loan-detail',
	templateUrl: './loan-detail.component.html',
	styleUrls: ['./loan-detail.component.scss']
})
export class LoanDetailComponent implements OnInit {
	loan$: Observable<Loan>;
	loan: Loan;
  loanNumber: string;

	loanForm: FormGroup;
	// loanForm = this.fb.group({
	// 	borrower: [''],
	// 	borrowerPrimarySSN: [''],
	//   propertyAddress1: [''],
	//   propertyCity: [''],
	// });

	constructor(private loanFacade: LoansFacade, private fb: FormBuilder) {}

	ngOnInit() {
		this.loanForm = this.fb.group({
			borrower: [''],
			borrowerPrimarySSN: [''],
			propertyAddress1: [''],
			propertyCity: ['']
		});
		this.loan$ = this.loanFacade.selectedLoan$;
    this.loan$.subscribe(v => {
      this.loanNumber = v.loanNumber;
    })
	}
}
