import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { faEnvelope, faFileExcel, faFilePdf, faFileWord } from '@fortawesome/free-regular-svg-icons';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { EventBusService } from '@hza/core';
import { CoreTable, CoreTableFilterComponent } from '@hza/ui-components/core-table';
import { merge } from 'rxjs';
import { Document } from '../../models/document.model';
@Component({
	selector: 'hza-doc-table',
	templateUrl: './doc-table.component.html',
	styleUrls: [ './doc-table.component.scss' ],
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({ height: '0px', minHeight: '0', opacity: 0 })),
			state('expanded', style({ height: '*', opacity: 1 })),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
		])
	]
})
export class DocTableComponent extends CoreTable<Document> implements AfterViewInit {
	@Input()
	set documents(documents: Document[]) {
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
		this.viewport.renderedRangeStream.subscribe((v) => {
			const el = this.viewport.elementRef.nativeElement;
			const offSetHelper = 1000;
			const offset = Math.min(offSetHelper, this.viewport.getOffsetToRenderedContentStart());
			this.placeholderHeight = offset;
			el.style.setProperty('--offset', `-${offset}px`);
		});
	}

	placeholderWhen(index: number, _: any) {
		return index == 0;
	}
	ngAfterViewInit() {
		const sortChange = merge(this.sort.sortChange, this.sort.initialized);
		this.dataSort = this.sort;
		const sortChangeHere = merge(this.dataSort.sortChange, this.dataSort.initialized);
	}
	
	

	toggle() {
		this.isExpanded = !this.isExpanded;
	}
}
