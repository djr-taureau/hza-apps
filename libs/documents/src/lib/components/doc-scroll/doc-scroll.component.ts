import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../../models/document.model';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
	selector: 'hza-doc-scroll',
	templateUrl: './doc-scroll.component.html',
	styleUrls: ['./doc-scroll.component.scss']
})
export class DocScrollComponent implements OnInit {
	@Input() documents: Document[];

	selectedDoc: Document;

	constructor(private clipboard: Clipboard) {}

	ngOnInit() {}

	copy(value) {
		return this.clipboard.copy(value);
	}
}
