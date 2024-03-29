import { Component, OnInit } from '@angular/core';
import { LoansFacade } from '@hza/shared/loans/data-access/state';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoanDetail, LoanDetailDoc } from '@hza/shared/loans/models';
import { LoansService } from '@hza/shared/loans/data-access/data';

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

	constructor(private loanFacade: LoansFacade, private fb: FormBuilder, private loansService: LoansService) {}

	ngOnInit() {
		this.loan$ = this.loanFacade.loanDetail$;
		this.loan$.subscribe((v) => {
			this.loanNumber = v[0].LoanNumber;
			this.loanForm.setValue({
				BorrowerPrimaryFullName: v[0].BorrowerPrimaryFullName,
				BorrowerSSN: v[0].BorrowerSSN,
				BorrowerSecondaryFullName: v[0].BorrowerSecondaryFullName,
				BorrowerCoSSN: v[0].BorrowerCoSSN,
				InvestorName: v[0].InvestorName,
			Property: `${v[0].PropertyStreet}\n${v[0].PropertyCity},${v[0].PropertyStateCode}  ${v[0].PropertyZipCode}`
			});
			// this.loanForm = this.fb.group(this.loanDetail);
			this.loanForm.get('BorrowerPrimaryFullName').disable();
			this.loanForm.get('BorrowerSSN').disable();
			this.loanForm.get('BorrowerSecondaryFullName').disable();
			this.loanForm.get('BorrowerCoSSN').disable();
			this.loanForm.get('InvestorName').disable();
			this.loanForm.get('Property').disable();
		});
	}
}

