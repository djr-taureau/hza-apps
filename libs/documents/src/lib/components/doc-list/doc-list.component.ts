import { animate, state, style, transition, trigger } from '@angular/animations';
import { Clipboard } from '@angular/cdk/clipboard';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, TemplateRef } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faFileExcel, faFilePdf, faFileWord } from '@fortawesome/free-regular-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { fileType } from '@hza/shared/utils';
import { Document } from '../../models/document.model';
import * as _ from 'lodash';
import { PopoverService } from '@hza/ui-components/overlay';
import { PopoverRef } from '@hza/ui-components/overlay';

@Component({
	selector: 'hza-doc-list',
	templateUrl: './doc-list.component.html',
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({ height: '0px', minHeight: '0' })),
			state('expanded', style({ height: '*' })),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
		])
	],
	styleUrls: ['./doc-list.component.scss']
})
export class DocListComponent implements OnInit, OnChanges {
	columns: string[] = ['select', 'Extension', 'DocFileName', 'DocType', 'FileSize', 'CreatedBy', 'CreatedDate'];
	faEnvelope = faEnvelope;
	faFilePdf = faFilePdf;
	faFileWord = faFileWord;
	faFileExcel = faFileExcel;
	faFilter = faFilter;
	getFileType = fileType;
	@ViewChild(MatSort) sort: MatSort;
	dataSource: MatTableDataSource<Document>;
	selection = new SelectionModel<Document>(true, []);
	expandedElement: Document | null;
	readonly formControl: AbstractControl;
	displayData: Document[];
	overlayRef: PopoverRef;
	@Input() documents: Document[];
	// @Input() selectedDocument: Document;
	@Output() selectedDoc = new EventEmitter<number>();

	constructor(
		private clipboard: Clipboard,
		formBuilder: FormBuilder,
		registry: MatIconRegistry,
		sanitizer: DomSanitizer,
		private popover: PopoverService
	) {
		// this.dataSource.filterPredicate = ((data, filter) => {
		// 	const a = !filter.docFileName || data.docFileName.toLowerCase().includes(filter.docFileName);
		// 	const b = !filter.createdBy || data.createdBy.toLowerCase().includes(filter.createdBy);
		// 	const c = !filter.docType || data.docType.toLowerCase().includes(filter.docType);
		// 	return a && b && c;
		// }) as (Document, string) => boolean;
		// this.formControl = formBuilder.group({
		// 	docFilename: '',
		// 	createdBy: '',
		// 	docType: ''
		// });
		// this.formControl.valueChanges.subscribe((value) => {
		// 	const filter = {
		// 		...value,
		// 		docFileName: value.docFileName.trim().toLowerCase(),
		// 		createdBy: value.createdBy.trim().toLowerCase(),
		// 		docType: value.docType.trim().toLowerCase()
		// 	} as string;
		// 	this.dataSource.filter = filter;
		// });
		// const svgEnvelope = icon(faEnvelope).html.join('');
		// const svgFileWord = icon(faFileWord).html.join('');
		// const svgFilePdf = icon(faFilePdf).html.join('');
		// const svgFileExcel = icon(faFileExcel).html.join('');
		// const svgFilter = icon(faFilter).html.join('');

		// registry.addSvgIconLiteral('font-awesome', sanitizer.bypassSecurityTrustHtml(svgEnvelope));
		// registry.addSvgIconLiteral('font-awesome', sanitizer.bypassSecurityTrustHtml(svgFileWord));
		// registry.addSvgIconLiteral('font-awesome', sanitizer.bypassSecurityTrustHtml(svgFilePdf));
		// registry.addSvgIconLiteral('font-awesome', sanitizer.bypassSecurityTrustHtml(svgFileExcel));
		// registry.addSvgIconLiteral('font-awesome', sanitizer.bypassSecurityTrustHtml(svgFilter));
	}

	ngOnInit() {
		console.log(this.documents);
		this.documents = _.slice(this.documents, 0, 24)
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.documents) {
			this.documents = _.slice(this.documents, 0, 24)
			this.dataSource = new MatTableDataSource(this.documents);
			this.dataSource.sort = this.sort;
		}
	}

	isAllSelected() {
		const numSelected = this.selection.selected.length;
		const numRows = this.dataSource.data.length;
		return numSelected === numRows;
	}

	copy(value) {
		console.log(value);
		this.clipboard.copy(value);
	}
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
	
	openThis() {
		console.log('open this');
	}
	
	
	show(content: TemplateRef<any>, origin: HTMLElement) {
  		const popoverRef = this.popover.open({
    		content,
    		origin
  		});

  		popoverRef.afterClosed$.subscribe(res => {
    		console.log(res);
  		});
	}
	// 	show(content: ComponentType<LoanSearchFormComponent>, origin) {
	// 	this.overlayRef = this.popover.open<{ values: string[] }>({
	// 		content,
	// 		origin,
	// 		data: {
	// 			values: ['1', '2', '3']
	// 		}
	// 	});
		

	// 	// this.overlayRef.afterClosed$.subscribe((res) => {
	// 	// 	if (this.loanQuery) {
	// 	// 		this.updateSearchBox(this.loanQuery.loanSearch);
	// 	// 	}
	// 	// });
	// }

	/** Selects all rows if they are not all selected; otherwise clear selection. */
	masterToggle() {
		this.isAllSelected()
			? this.selection.clear()
			: this.dataSource.data.forEach((row) => this.selection.select(row));
	}
	selectDoc(docId) {
		this.selectedDoc.emit(docId);
	}
}
