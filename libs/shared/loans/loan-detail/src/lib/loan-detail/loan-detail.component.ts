import { Component, OnInit } from '@angular/core';
import { LoansFacade } from '@hza/shared/loans/data-access/state';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { Loan, LoanDetail, toLoanFormValue, LoanDetailDoc } from '@hza/shared/loans/models';
import { tap, startWith, map } from 'rxjs/operators';

@Component({
	selector: 'hza-loan-detail',
	templateUrl: './loan-detail.component.html',
	styleUrls: [ './loan-detail.component.scss' ]
})
export class LoanDetailComponent implements OnInit {
	loan$: Observable<LoanDetailDoc>;
	loanDetail: LoanDetail;
	loanNumber: string;
	property$: Observable<string>;
	// loanForm: FormGroup;

	loanForm = this.fb.group({
		BorrowerPrimaryFullName: [ '' ],
		BorrowerSSN: [ '' ],
		BorrowerSecondaryFullName: [ '' ],
		BorrowerCoSSN: [ '' ],
		InvestorName: [ '' ],
		Property: [ '' ],
	});

	constructor(private loanFacade: LoansFacade, private fb: FormBuilder) {}

	ngOnInit() {
		this.loan$ = this.loanFacade.loanDetail$;
		this.loan$.pipe(tap((l) => console.log('', l[0])));
		this.loan$.subscribe((v) => {
			this.loanNumber = v[0].LoanNumber;
			console.log('EARL', v[0]);
			this.loanForm.setValue({
				BorrowerPrimaryFullName: v[0].BorrowerPrimaryFullName,
				BorrowerSSN: v[0].BorrowerSSN,
				BorrowerSecondaryFullName: v[0].BorrowerSecondaryFullName,
				BorrowerCoSSN: v[0].BorrowerCoSSN,
				InvestorName: v[0].InvestorName,
				Property: v[0].PropertyStreet + v[0].PropertyCity + v[0].PropertyStateCode + v[0].PropertyZipCode
			});

			// this.loanDetail = toLoanFormValue(v);
			// this.loanForm = this.fb.group(this.loanDetail);
			// this.loanForm.get('borrower').disable();
			// this.loanForm.get('borrowerPrimarySSN').disable();
			// this.loanForm.get('coBorrower').disable();
			// this.loanForm.get('borrowerSecondarySSN').disable();
			// this.loanForm.get('propertyAddress1').disable();
			// this.loanForm.get('propertyCity').disable();
			// this.loanForm.get('investor').disable();
		});
	}
}

