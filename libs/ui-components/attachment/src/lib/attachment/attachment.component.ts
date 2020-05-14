import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

	@Input() attachmentData: File;
	@Output() removeAttachment: EventEmitter<string>;

	constructor() {}

	ngOnInit() {
		console.log('attachment')
	}
}
