import { Component, OnInit } from '@angular/core';
import { FieldType, FormlyConfig } from '@ngx-formly/core';

@Component({
	selector: 'hza-field-custom-input',
	template: `
    <formly-field>
      [model]="field.model"
      [form]="form"
      [field]="field"
      [options]="options">
    </formly-field>
  `
})
export class CustomInputComponent extends FieldType implements OnInit {
	customField;

	constructor(private formlyConfig: FormlyConfig) {
		super();
	}

	ngOnInit() {
		this.field.wrappers = [];
	}
}
