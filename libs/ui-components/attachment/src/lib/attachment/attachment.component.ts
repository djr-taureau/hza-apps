//tslint:disable:use-host-property-decorator
import { Component, OnInit, Input } from '@angular/core';
// import { fileTypesSlug } from '@fay/shared';

import { AttachmentData } from '../models';

@Component({
	selector: 'hza-attachment',
	templateUrl: './attachment.component.html',
	styleUrls: [
		'./attachment.component.scss'
	],
	// host: { class: 'fs-attachment' }
})
export class AttachmentComponent implements OnInit {
	fileIcon: string;

	@Input() attachmentData: AttachmentData; // TODO: Need to add Attachement Typings but need straighten out file Typings

	constructor() {}

	ngOnInit() {
		// this.fileIcon = `icon icon-${fileTypesSlug(this.attachmentData.relativePath)}`;
	}
}
