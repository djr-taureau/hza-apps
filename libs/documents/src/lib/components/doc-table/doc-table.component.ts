import { Component, Input } from '@angular/core';
import { CoreTable } from '@hza/ui-components/core-table';
import { Document } from '../../models/document.model';

@Component({
	selector: 'hza-doc-table',
	templateUrl: './doc-table.component.html',
	styleUrls: [
		'./doc-table.component.scss'
	]
})
export class DocTableComponent extends CoreTable<Document> {
	@Input()
	set documents(documents: Document[]) {
		// sets dataSource on CoreTable
		if (documents) {
			this.set(documents);
		}
	}

	@Input() sticky: boolean;

	constructor() {
		// column definitions for CoreTable
		super([
			'DocFileName',
			'DocType',
			'CreatedDated',
			'CreatedBy',
			'actions'
		]);
	}

	onInit() {
		// this is how you could recalculate the sticky header position on scroll
		this.viewport.renderedRangeStream.subscribe(() => {
			const el = this.viewport.elementRef.nativeElement;
			// the magicNumber can be calculated using all of:
			// el.scrollTop; el.clientHeight; rowHeight; viewport.offset.
			// but it's a hassle so let's just fix a pretty ok one here
			const magicNumber = 312;
			const offset = Math.min(magicNumber, this.viewport.getOffsetToRenderedContentStart());
			el.style.setProperty('--offset', `-${offset}px`);
		});
	}
}