import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { FormlyFieldConfig } from '@ngx-formly/core';
import { formFields, formFieldConfig } from '@hza/ui-components/forms';
import * as _ from 'lodash';
import { Document } from '../../models/document.model';
@Component({
	selector: 'hza-doc-detail',
	template: `<hza-ui-form [data]="doc" [fields]="fields" [model]="model"></hza-ui-form>`,
	styleUrls: ['./doc-detail.component.css']
})
export class DocDetailComponent implements OnInit, OnChanges {
	@Input() public doc: Document;

	model: any;
	form;
	fieldNames: string[];
	requestFieldNames: string[];
	fields: FormlyFieldConfig[] = [];

	constructor() {}


	ngOnInit() {
		if (this.doc) {
			this.buildDocForm(this.doc);
		}
	}
	ngOnChanges() {
		if (this.doc) {
			this.buildDocForm(this.doc);
		}
	}

	buildDocForm(doc: Document) {
		this.fieldNames = formFields(this.doc);
		this.fields = formFieldConfig(this.fieldNames);
		const getObject = _.pick(this.doc, this.fieldNames);
		this.model = getObject;
	}
}
