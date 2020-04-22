import { ComponentType } from '@angular/cdk/portal';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Loan } from '@hza/shared/loans/models';
import { OverlayService, PopoverService } from '@hza/ui-components/overlay';

@Component({
	selector: 'hza-loan-search',
	templateUrl: './loan-search.component.html',
	styleUrls: ['./loan-search.component.scss']
})
export class LoanSearchComponent implements OnInit, OnChanges {
	loanSearchComponent = LoanSearchComponent;
	loanSearchComponentResponse = null;
	form: FormGroup;

	loanSearchBox = new FormControl('');
	@Input() loansLoaded: boolean;
	@Input() loans: Loan[];
	@Output() query = new EventEmitter<String>();

	loadLoans: Boolean;

	constructor(private fb: FormBuilder, private popover: PopoverService, private overlayService: OverlayService) {}

	ngOnInit() {
		this.loadLoans = false;
		this.form = this.fb.group({
			company: '0',
			loan: 'loan',
			loanSearch: ''
		});
		this.form.valueChanges.subscribe(console.log);
	}

	ngOnChanges() {
		// console.log(this.form.value)
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
			this.updateSearchBox();
			console.log(this.form.get('loanSearch').value);
			
		});
	}

	updateSearchBox() {
		this.loanSearchBox.setValue(this.form.get('loanSearch').value);
	}

	clear() {
		this.loanSearchBox.setValue('');
		this.form.patchValue({
			loanSearch: ''
		});
	}

	selected(value) {
		console.log(value);
	}

	open(content: TemplateRef<any> | ComponentType<any> | string) {
		const ref = this.overlayService.open(content, null);

		ref.afterClosed$.subscribe((res) => {
			console.log('open', res);
			console.log(this.form.get('loanSearch').value);
		});
	}
}
