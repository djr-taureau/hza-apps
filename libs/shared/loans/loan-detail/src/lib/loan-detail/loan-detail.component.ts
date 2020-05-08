import { Component, OnInit } from '@angular/core';
import { LoansFacade } from '@hza/shared/loans/data-access/state';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Loan, LoanDetail, toLoanFormValue } from '@hza/shared/loans/models';
import { tap } from 'rxjs/operators';

@Component({
	selector: 'hza-loan-detail',
	templateUrl: './loan-detail.component.html',
	styleUrls: ['./loan-detail.component.scss']
})
export class LoanDetailComponent implements OnInit {
	loan$: Observable<Loan>;
	loanDetail: LoanDetail;
	loanNumber: string;
	// loanForm: FormGroup;

	loanForm = this.fb.group({
		borrower: [''],
		borrowerPrimarySSN: [''],
	  propertyAddress1: [''],
	  propertyCity: [''],
	});

	controls = {
		borrower: this.loanForm.get('borrower'),
		borrowerPrimarySSN: this.loanForm.get('borrowerPrimarySSN'),
		propertyAddress1: this.loanForm.get('propertyAddresss1'),
		propertyCity: this.loanForm.get('propertyCity')
	};

	constructor(private loanFacade: LoansFacade, private fb: FormBuilder) {}

	ngOnInit() {
    this.loan$ = this.loanFacade.selectedLoan$;
		this.loan$.subscribe((v) => {
			this.loanNumber = v.loanNumber;
			this.loanDetail = toLoanFormValue(v);
			this.loanForm = this.fb.group(this.loanDetail);
			
			this.loanForm.disable;
			this.loanForm.get('borrower').disable();
		});
	}
}
