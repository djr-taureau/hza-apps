import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
	LoanDetail,
	LoanDetailDoc,
	docLoanDetailBorrower,
	docLoanDetailCoBorrower,
	docLoanDetailInvestor,
	docLoanDetailProperty
} from '@hza/shared/loans/models';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { formFieldDefaults, formFieldConfig, FormBuilderModel } from '@hza/ui-components/forms';
import * as _ from 'lodash';
import { pluck } from 'ramda';
import { LoansFacade } from '@hza/shared/loans/data-access/state';

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
	borrowerModel: any;
	coBorrowerModel: any;
	investorModel: any;
	propertyModel: any;
	form;
	fieldNames: string[];
	borrowerFields: FormlyFieldConfig[] = [];
	coBorrowerFields: FormlyFieldConfig[] = [];
	investorFields: FormlyFieldConfig[] = [];
	propertyFields: FormlyFieldConfig[] = [];
	options: FormlyFormOptions = {
		formState: {
			disabled: true
		}
	};

	constructor(private loanFacade: LoansFacade) {}

	ngOnInit() {
		this.loan$ = this.loanFacade.loanDetail$;
		this.loan$.subscribe((v) => {
			this.loanNumber = v[0].LoanNumber;
			const loan = v[0];
			this.borrowerModel = this.buildLoanDetailForm(loan, docLoanDetailBorrower)[0];
			this.coBorrowerModel = this.buildLoanDetailForm(loan, docLoanDetailCoBorrower)[0];
			this.investorModel = this.buildLoanDetailForm(loan, docLoanDetailInvestor)[0];
			this.propertyModel = this.buildLoanDetailForm(loan, docLoanDetailProperty)[0];
			this.propertyModel.PropertyStreet = `${loan.PropertyStreet}\n${loan.PropertyCity}, ${loan.PropertyStateCode}  ${loan.PropertyZipCode}`;
			this.borrowerFields = this.buildLoanDetailForm(loan, docLoanDetailBorrower)[1];
			this.coBorrowerFields = this.buildLoanDetailForm(loan, docLoanDetailCoBorrower)[1];
			this.investorFields = this.buildLoanDetailForm(loan, docLoanDetailInvestor)[1];
			this.propertyFields = this.buildLoanDetailForm(loan, docLoanDetailProperty)[1];
			
			console.log('b', this.borrowerModel);
			console.log('cb', this.coBorrowerModel);
			console.log('i', this.investorModel);
			console.log('p', this.propertyModel);
		});
	}

	buildLoanDetailForm(loan: LoanDetailDoc, formConfig: FormBuilderModel[]) {
		const getFieldNames = pluck('fieldName');
		const fieldNames = getFieldNames(formConfig);
		this.fieldNames = formFieldDefaults(loan, fieldNames);
		const fields = formFieldConfig(formConfig);
		const getObject = _.pick(loan, this.fieldNames);
		return [ getObject, fields ];
	}
}
