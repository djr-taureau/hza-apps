import { ComponentType } from '@angular/cdk/portal';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Loan } from '@hza/shared/loans/models';
import { OverlayService, PopoverService } from '@hza/ui-components/overlay';
import { loanSearchTypes } from './loanSearchTypes';


@Component({
	selector: 'hza-loan-search',
	templateUrl: './loan-search.component.html',
	styleUrls: ['./loan-search.component.scss']
})
export class LoanSearchComponent implements OnInit, OnChanges {
	loanSearchComponent = LoanSearchComponent;
	loanSearchComponentResponse = null;
	
	@Input() loansLoaded: boolean;
	@Input() loans: Loan[];
	@Output() query = new EventEmitter<String>();
	form = new FormGroup({
    	loan: new FormControl('loan'),
		company: new FormControl('any'),
		loanSearch: new FormControl('')
  	});
	loadLoans: Boolean;
	
	constructor(
		private formBuilder: FormBuilder,
		private popover: PopoverService,
		private overlayService: OverlayService	) {}

	ngOnInit() {
		this.loadLoans = false;
	}
	
	ngOnChanges() {
		console.log(this.form.value)
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
