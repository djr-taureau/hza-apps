import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { CodeTable } from '../../models/code-table.model';

@Component({
	selector: 'hza-doc-upload-form',
	templateUrl: './doc-upload-form.component.html',
	styleUrls: [ './doc-upload-form.component.scss' ]
})
export class DocUploadFormComponent implements OnInit, OnChanges {
	@Input() docTypes: CodeTable[];


	docUploadForm: FormGroup;

	constructor(private fb: FormBuilder) {
	this.docUploadForm = this.fb.group({
		docType: [ '', Validators.required ],
		renameDoc: [ '', Validators.required ]
	});
	}

	ngOnInit() {
		// console.log('EARL', this.docTypes);
	}

	ngOnChanges() {
		console.log(this.docUploadForm.value);
	}

	// Getter method to access formcontrols
	get docType() {
		return this.docUploadForm.get('docType');
	}

	submit() {
		console.log(this.docUploadForm.value);
	}
}
