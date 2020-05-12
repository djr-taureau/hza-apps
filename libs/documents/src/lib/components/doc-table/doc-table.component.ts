import { animate, state, style, transition, trigger, query, stagger } from '@angular/animations';
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { faEnvelope, faFileExcel, faFilePdf, faFileWord } from '@fortawesome/free-regular-svg-icons';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { EventBusService } from '@hza/core';
import { CoreTable } from '@hza/ui-components/core-table';
import { Document } from '../../models/document.model';
import { merge } from 'rxjs';
@Component({
	selector: 'hza-doc-table',
	templateUrl: './doc-table.component.html',
	styleUrls: [ './doc-table.component.scss' ],
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({ height: '0px', minHeight: '0', opacity: 0})),
			state('expanded', style({ height: '*', opacity:  1})),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
		])
	]
})
export class DocTableComponent extends CoreTable<Document> implements AfterViewInit {
	@Input()
	set documents(documents: Document[]) {
		// sets dataSource on CoreTable
		if (documents) {
			this.set(documents);
		}
	}

	isExpanded: boolean;
	expandedElement: Document | null;
	placeholderHeight = 0;
	faEnvelope = faEnvelope;
	faFilePdf = faFilePdf;
	faFileWord = faFileWord;
	faFileExcel = faFileExcel;
	faCaretRight = faCaretRight;
	faCaretDown = faCaretDown;
	@Input() sticky: boolean;
	@Input() loaded: boolean;
	@ViewChild(MatSort, { static: false })
	dataSort: MatSort;
	constructor(private eventBus: EventBusService) {
		// column definitions for CoreTable
		super([ 'select', 'Extension', 'DocFileName', 'DocType', 'FileSize', 'CreatedDate', 'CreatedBy', 'actions' ]);
	}

	ngOnInit() {
		this.onInit();
		this.isExpanded = false;
	}

	onInit() {
		this.sticky = true;
		this.isExpanded = false;
		// this is how you could recalculate the sticky header position on scroll
		console.log(this.viewport.getRenderedRange());
		this.viewport.renderedRangeStream.subscribe((v) => {
			const el = this.viewport.elementRef.nativeElement;
			const magicNumber = 1000;
			const offset = Math.min(magicNumber, this.viewport.getOffsetToRenderedContentStart());
			this.placeholderHeight = offset;
			el.style.setProperty('--offset', `-${offset}px`);
		});
	}

	placeholderWhen(index: number, _: any) {
		return index == 0;
	}
	ngAfterViewInit() {
		// this.onInit();
		const sortChange = merge(this.sort.sortChange, this.sort.initialized);
		sortChange.subscribe((v) => console.log('SORT', v));
		console.log('vp', this.viewport);
		console.log('sort', this.sort);
		console.log('ds', this.dataSource);
		this.dataSort = this.sort;
		console.log('sort', this.dataSort);
		const sortChangeHere = merge(this.dataSort.sortChange, this.dataSort.initialized);
		sortChangeHere.subscribe((v) => console.log('SORT Here', v));
		this.eventBus.on('ClearFilters', (data: true) => {
			console.log('doc table', data);
			this.clearFilters();
		});
	}

	toggle() {
		this.isExpanded = !this.isExpanded;
	}
}
