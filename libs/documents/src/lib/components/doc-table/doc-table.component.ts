import { Component, Input } from '@angular/core';
import { CoreTable } from '@hza/ui-components/core-table';
import { Document } from '../../models/document.model';
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faFileExcel, faFilePdf, faFileWord } from '@fortawesome/free-regular-svg-icons';
@Component({
	selector: 'hza-doc-table',
	templateUrl: './doc-table.component.html',
	styleUrls: [ './doc-table.component.scss' ]
})
export class DocTableComponent extends CoreTable<Document> {
	@Input()
	set documents(documents: Document[]) {
		// sets dataSource on CoreTable
		if (documents) {
			this.set(documents);
		}
	}

	placeholderHeight = 0;
	faEnvelope = faEnvelope;
	faFilePdf = faFilePdf;
	faFileWord = faFileWord;
	faFileExcel = faFileExcel;
	faCaretRight = faCaretRight;
	faCaretDown = faCaretDown;
	@Input() sticky: boolean;
	@Input() loaded: boolean;

	constructor() {
		// column definitions for CoreTable
		super([ 'select', 'Extension', 'DocFileName', 'DocType', 'FileSize', 'CreatedDate', 'CreatedBy', 'actions' ]);
	}

	onInit() {
		this.sticky = false;
		// this is how you could recalculate the sticky header position on scroll
		this.viewport.renderedRangeStream.subscribe(() => {
			const el = this.viewport.elementRef.nativeElement;
			// the magicNumber can be calculated using all of:
			// el.scrollTop; el.clientHeight; rowHeight; viewport.offset.
			// but it's a hassle so let's just fix a pretty ok one here
			const magicNumber = 200;
			const offset = Math.min(magicNumber, this.viewport.getOffsetToRenderedContentStart());
			this.placeholderHeight = offset;
			el.style.setProperty('--offset', `-${offset}px`);
		});
	}

	placeholderWhen(index: number, _: any) {
		return index == 0;
	}
}
