import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { CodeTable } from '../../models/code-table.model';

@Component({
	selector: 'hza-doc-upload-form',
	templateUrl: './doc-upload-form.component.html',
	styleUrls: [ './doc-upload-form.component.scss' ]
})
export class DocUploadFormComponent implements OnInit {
	@Input() docTypes: CodeTable[];	q

	docForm = this.fb.group({
		docType: [ '' ],
		docName: [ '' ],
		filesize: [ '' ],
	});

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		console.log('EARL', this.docTypes);

	}


	changeDocType(e) {
		console.log(e.value);
		this.docType.setValue(e.target.value, {
			onlySelf: true
		});
	}

	// Getter method to access formcontrols
	get docType() {
		return this.docForm.get('docType');
	}
}
