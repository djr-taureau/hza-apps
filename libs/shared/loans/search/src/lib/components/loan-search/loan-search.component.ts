import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'hza-loan-search',
	templateUrl: './loan-search.component.html',
	styleUrls: ['./loan-search.component.scss']
})
export class LoanSearchComponent implements OnInit {
	myForm: FormGroup;


	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.myForm = this.formBuilder.group({
			radio: 'Loan'
		});
	}
}
