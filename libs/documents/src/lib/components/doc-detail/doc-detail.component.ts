import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Document, docDetailFields } from '../../models';
import { formFieldDefaults, formFieldConfig } from '@hza/ui-components/forms';
import * as _ from 'lodash';

@Component({
	selector: 'hza-doc-detail',
	template: `<hza-ui-form [formOptions]="options" [data]="doc" [fields]="fields" [model]="model"></hza-ui-form>`,
	styleUrls: [ './doc-detail.component.scss' ]
})
export class DocDetailComponent implements OnInit, OnChanges {
	@Input() public doc: Document;

	model: any;
	form;
	fieldNames: string[];
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
			// this.buildDocForm(this.doc);
		}
	}

	buildDocForm(doc: Document) {
		this.fieldNames = formFieldDefaults(doc, [ 'DocType', 'FileSize', 'CreatedDate', 'CreatedBy' ]);
		const fieldGroupConfig = formFieldConfig(docDetailFields);
		this.fields = [
			{
				wrappers: [ 'flex-container' ],
				fieldGroup: fieldGroupConfig
			}
		];
		const getObject = _.pick(this.doc, this.fieldNames);
		this.model = getObject;
	}
}
