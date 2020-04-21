import { ComponentType } from '@angular/cdk/portal';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Loan } from '@hza/shared/loans/models';
import { OverlayService, PopoverService } from '@hza/ui-components/overlay';
import { formly } from '@hza/ui-components/forms';
import { companySearchTypes, loanSearchTypes, SearchType } from './search-type.model';

@Component({
	selector: 'hza-loan-search',
	templateUrl: './loan-search.component.html',
	styleUrls: ['./loan-search.component.scss']
})
export class LoanSearchComponent implements OnInit {
	loanSearchComponent = LoanSearchComponent;
	loanSearchComponentResponse = null;

	companySearchTypesArr: SearchType[];
	loanSearchTypesArr: SearchType[];
	form = new FormGroup({});
	fields: FormlyFieldConfig[];
	@Input() loansLoaded: boolean;
	@Input() loans: Loan[];
	@Output() query = new EventEmitter<String>();
	myForm: FormGroup;
	loadLoans: Boolean;

	model = {
		search: '',
		multiCompany: 'Any',
		loan: 'loan'
	};

	constructor(
		private formBuilder: FormBuilder,
		private popover: PopoverService,
		private overlayService: OverlayService
	) {}

	ngOnInit() {
		this.loadLoans = false;
		this.companySearchTypesArr = companySearchTypes;
		this.loanSearchTypesArr = loanSearchTypes;
		this.fields = [
			formly.text('search', 'Search'),
			formly.radio('multiCompany', 'Company', [
        { key: "m", label: "male" },
        { key: "f", label: "female" }
      ]),
			formly.radio('loan', 'Loan', [
        { key: "m", label: "male" },
        { key: "f", label: "female" }
      ])
		];
	}

	dispatch($event) {
		console.log($event);
	}

	searchLoans($event) {
		console.log('loan search', $event);
	}

	show(content: ComponentType<LoanSearchComponent>, origin) {
		const ref = this.popover.open<{ skills: number[] }>({
			content,
			origin,
			data: {
				skills: [1, 2, 3]
			}
		});

		ref.afterClosed$.subscribe((res) => {
			console.log('show', res);
		});
	}

	selected(value) {
		console.log(value);
	}

	open(content: TemplateRef<any> | ComponentType<any> | string) {
		const ref = this.overlayService.open(content, null);

		ref.afterClosed$.subscribe((res) => {
			console.log('open', res);
		});
	}
}
