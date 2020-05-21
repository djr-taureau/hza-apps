import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { formFields, formFieldConfig, formFieldDefaults } from '@hza/ui-components/forms';
import * as _ from 'lodash';
import { Document, docDetailFields } from '../../models';

@Component({
	selector: 'hza-doc-detail',
	template: `<hza-ui-form [formOptions]="options" [data]="doc" [fields]="fields" [model]="model"></hza-ui-form>`,
	styleUrls: ['./doc-detail.component.scss']
})
export class DocDetailComponent implements OnInit, OnChanges {
	@Input() public doc: Document;

	model: any;
	form;
	fieldNames: string[];
	requestFieldNames: string[];
	fields: FormlyFieldConfig[] = [];
	options: FormlyFormOptions = {
		formState: {
			disabled: true
		}
	};

	constructor() {}

	ngOnInit() {
		if (this.doc) {
			this.buildDocForm(this.doc);
		}
	}
	ngOnChanges() {
		if (this.doc) {
			this.buildDocForm(this.doc);
			console.log('from doc detail', this.doc)
		}
	}

	buildDocForm(doc: Document) {
		this.fieldNames = formFieldDefaults(doc, ['DocType', 'FileSize', 'CreatedDate' , 'CreatedBy']);
		this.fields = formFieldConfig(docDetailFields);
		const getObject = _.pick(this.doc, this.fieldNames);
		this.model = getObject;
	}
}


