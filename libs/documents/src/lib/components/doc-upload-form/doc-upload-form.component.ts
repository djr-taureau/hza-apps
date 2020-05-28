import { Component, OnInit, Input, OnChanges, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { CodeTable } from '../../models/code-table.model';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { DocsFacade } from '../../+state/documents/documents.facade';

@Component({
	selector: 'hza-doc-upload-form',
	templateUrl: './doc-upload-form.component.html',
	styleUrls: [ './doc-upload-form.component.scss' ]
})
export class DocUploadFormComponent implements OnInit, OnChanges, AfterViewInit {
	@Input() docTypes:CodeTable[];

	form = new FormGroup({});
	model = {
		docType: '',
		renameDoc: ''
	};
	docUploadForm: FormGroup;

	fields: FormlyFieldConfig[] = [
		{
			key: 'docType',
			type: 'select',
			wrappers: [ 'flex-container-panel' ],
			templateOptions: {
				class: 'x-wide',
				label: 'Document Type',
				options: this.docsFacade.docTypes$,
				labelProp: 'CodeValue',
				valueProp: 'CodeValue'
			}
		},
		{
			key: 'renameDoc',
			type: 'input',
			wrappers: [ 'flex-container-panel' ],
			templateOptions: {
				label: 'Rename File',
				class: 'x-wide',
			}
		}
	];
	constructor(private fb: FormBuilder, private docsFacade: DocsFacade) {
		this.docUploadForm = this.fb.group({
			docType: [ '', Validators.required ],
			renameDoc: [ '', Validators.required ]
		});
	}

	ngOnInit() {
		// console.log('EARL', this.docTypes);
		console.log(this.fields);
	}

	ngOnChanges() {
		console.log(this.docUploadForm.value);
	}
	ngAfterViewInit() {
		console.log(this.fields);
		console.log(this.form);
	}

	// Getter method to access formcontrols
	get docType() {
		return this.docUploadForm.get('docType');
	}

	submit() {
		console.log(this.docUploadForm.value);
	}
}
