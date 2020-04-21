import { ComponentType } from '@angular/cdk/portal';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Loan } from '@hza/shared/loans/models';
import { OverlayService, PopoverService } from '@hza/ui-components/overlay';

import { formFields, formFieldDefaults, formFieldConfigBuilder, FormConfigBuilder } from '@hza/ui-components/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import * as _ from 'lodash';
import { searchOptions, searchFields } from './search-type.model';
@Component({
	selector: 'hza-loan-search',
	templateUrl: './loan-search.component.html',
	styleUrls: ['./loan-search.component.scss']
})
export class LoanSearchComponent implements OnInit {
	// model = {
	// 	company: 'any',
	// 	loan: 'loan',
	// 	search: ''
	// };

	form;
	 options: FormlyFormOptions = {};
	fieldNames: string[];
	fields: FormlyFieldConfig[] = [];

	constructor(	
		private formBuilder: FormBuilder,
		private popover: PopoverService,
		private overlayService: OverlayService
	) {}

	ngOnInit() {


		this.fields = searchFields;
		const searchField = new FormConfigBuilder()
			.cssSelector('search-input')
			.key('search')
			.type('input')
			.templateOptions(null, null, null)
			.build();
		this.fields.push(searchField);
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

	open(content: ComponentType<LoanSearchComponent>, origin) {
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
}
