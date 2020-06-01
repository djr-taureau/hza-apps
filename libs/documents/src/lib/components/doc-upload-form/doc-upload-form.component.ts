import { Component, OnInit, Input, OnChanges, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CodeTable } from '../../models/code-table.model';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DocsFacade } from '../../+state/documents/documents.facade';
import { EventBusService } from '@hza/core';

@Component({
	selector: 'hza-doc-upload-form',
	templateUrl: './doc-upload-form.component.html',
	styleUrls: [ './doc-upload-form.component.scss' ]
})
export class DocUploadFormComponent implements OnInit, OnChanges, AfterViewInit {
	@Input() docTypes: CodeTable[];

	form = new FormGroup({});
	model = {
		docType: '',
		renameDoc: ''
	};
	docUploadForm: FormGroup;
	
	enableRenameDoc: boolean;

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
				class: 'x-wide'
			}
		}
	];
	constructor(private fb: FormBuilder, private docsFacade: DocsFacade, private eventBus: EventBusService) {
		this.docUploadForm = this.fb.group({
			docType: [ '', Validators.required ],
			renameDoc: [ '', Validators.required ]
		});
	}

	ngOnInit() {
		console.log(this.fields);
		this.enableRenameDoc = true;
		this.eventBus.on('DocUploadChanged', (data: File[]) => {
			if (data.length > 1) {
				console.log('hey dave init', this.enableRenameDoc)
			}
			this.enableRenameDoc = data.length <= 1 ? true : false;
		});
	}

	ngOnChanges() {
		console.log(this.docUploadForm.value);
		this.eventBus.on('DocUploadChanged', (data: File[]) => {
			// if (data.length > 1) {
			// 	console.log('hey dave change')
			// 	this.uploadDocsStatus = true;
			// } else {
			// 	this.uploadDocsStatus = false;
			// }
			console.log(this.enableRenameDoc);
			// ** Perfect example of where ternary totally makes sense
			this.enableRenameDoc = data.length <= 1 ? true : false;
		});
	}
	ngAfterViewInit() {
		console.log(this.fields);
		console.log(this.form);
	}

	// Getter method to access formcontrols
	get docType() {
		return this.docUploadForm.get('docType');
	}

	handleFiles($event) {
		console.log('files to upload', $event);
		this.uploadFiles($event);
	}

	uploadFiles(files: File[]) {
		this.enableRenameDoc = files.length <= 1 ? true : false;
	}

	submit() {
		console.log(this.docUploadForm.value);
	}
}
