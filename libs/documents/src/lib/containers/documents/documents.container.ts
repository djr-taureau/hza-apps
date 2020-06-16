import { ChangeDetectionStrategy, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { EventBusService, EventData } from '@hza/core';
import { asyncScheduler, Observable, Subject } from 'rxjs';
import { observeOn, shareReplay } from 'rxjs/operators';
import { DocsFacade } from '../../+state/documents/documents.facade';
import { CodeTable } from '../../models/code-table.model';
import { Document } from '../../models/document.model';

@Component({
	selector: 'hza-doc-repo',
	templateUrl: './documents.container.html',
	styleUrls: [ './documents.container.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentsContainer implements OnInit, OnDestroy, OnChanges {
	delay = 2000;

	pending: Observable<boolean>;
	sticky: boolean;

	private unsubscribe$: Subject<void> = new Subject();

	public docsLoaded$: Observable<Boolean>;
	public documents$: Observable<Document[]>;
	public docsTotal$: Observable<number>;
	public selectedDoc$: Observable<Document>;
	public docTypes$: Observable<CodeTable[]>;

	content = 'A simple string content modal overlay';
	theme = 'default';
	collapsed = false;
	opened: boolean;

	fetchingData: boolean;

	constructor(private docs: DocsFacade, private eventBus: EventBusService) {}

	ngOnInit() {
		this.sticky = false;
		this.documents$ = this.docs.documents$.pipe(observeOn(asyncScheduler), shareReplay(4));
		this.docsTotal$ = this.docs.docTotal$;
		this.docsLoaded$ = this.docs.docsLoaded$;
		this.selectedDoc$ = this.docs.selectedDoc$;
		this.docTypes$ = this.docs.docTypes$;
		this.opened = false;
		this.fetchingData = true;
	}
	ngOnChanges() {
		this.selectedDoc$.subscribe((v) => console.log('selected doc', v));
	}
	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}
	selectDoc(id) {
		this.docs.selectDoc(id);
	}
	clearDocFilters(evt: string) {
		console.log('clear filter', evt);
		this.eventBus.emit(new EventData('ClearFilters', evt));
	}
}
