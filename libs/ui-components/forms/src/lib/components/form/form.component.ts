import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormConfigBuilder, formFields } from '../../config-builders';

@Component({
	selector: 'hza-ui-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges {
	form = new FormGroup({});
	options: FormlyFormOptions = {
		formState: {
			disabled: true
		}
	};
	@Input() public title: string;
	@Input() public fields: FormlyFieldConfig[];
	@Input() public formOptions: FormlyFormOptions;

	@Input() public data: any;

	@Input() public model: any;

	constructor() {}

	ngOnInit() {
		if (this.formOptions) {
			// console.log(this.formOptions);
		}
	}

	ngOnChanges() {
		// form fields
	}
	onSubmit() {
		// console.log(this.model);
	}
}
