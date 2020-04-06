import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, AfterViewInit, QueryList, HostBinding, Directive, ContentChildren} from '@angular/core';
import { Document } from '../../models/document.model';
import { Clipboard } from '@angular/cdk/clipboard';
import { trackByFn as ngUtilTrackBy } from '@hza/shared/utils';
import * as _ from 'lodash';


@Component({
	selector: 'hza-doc-scroll',
	templateUrl: './doc-scroll.component.html',
	styleUrls: ['./doc-scroll.component.scss']
})
export class DocScrollComponent implements OnInit, AfterViewInit {
	@Input() docs: Document[];
	@ViewChildren('gridRows') gridRows: ElementRef;
	// @ContentChildren('gridRowContent') gridRowContent: ElementRef;
	// @ViewChildren(Item) items:QueryList<gridRows>;

	selectedDoc: Document;
	public trackByFn = ngUtilTrackBy;

	constructor(private clipboard: Clipboard) {}

	ngOnInit() {
		// console.log(this.gridRows);
	}

	ngAfterViewInit() {
		const getIds = _.property(this.gridRows, 'id')
		console.log(getIds);
		console.log(this.gridRows);
		// console.log(this.gridRowContent);
	}

	copy(value) {
		return this.clipboard.copy(value);
	}
}


@Directive({
	selector: 'hzaDataGridRow',
	host: { class: 'clr-datagrid' }
})
export class DataGridRowDirective {
	@HostBinding('attr.role') role = 'row';
	// @HostBinding('class.datagrid-row')

}
