import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../../models/document.model';

@Component({
	selector: 'hza-doc-scroll',
	templateUrl: './doc-scroll.component.html',
	styleUrls: ['./doc-scroll.component.css']
})
export class DocScrollComponent implements OnInit {
	@Input() docs: Document[];

	selectedDoc: Document;

	constructor() {}

	ngOnInit() {}
}
