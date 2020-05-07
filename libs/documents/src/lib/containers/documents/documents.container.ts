import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, OnChanges } from '@angular/core';
import { Observable, Subject, asyncScheduler } from 'rxjs';
import { observeOn, shareReplay } from 'rxjs/operators';
import { DocsFacade } from '../../+state/documents/documents.facade';
import { Document } from '../../models/document.model';

@Component({
	selector: 'hza-doc-repo',
	templateUrl: './documents.container.html',
	styleUrls: ['./documents.container.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentsContainer implements OnInit, OnDestroy, OnChanges {
	private unsubscribe$: Subject<void> = new Subject();

	public docsLoaded$: Observable<Boolean>;
	public documents$: Observable<Document[]>;
	public docsTotal$: Observable<number>;
	public selectedDoc$: Observable<Document>;

	content = 'A simple string content modal overlay';
	theme = 'default';
	collapsed = false;
	opened: boolean;
	sticky: boolean;

	fetchingData: boolean;

	constructor(private docs: DocsFacade) {}

	ngOnInit() {
		this.sticky = false;
		this.documents$ = this.docs.documents$.pipe(observeOn(asyncScheduler), shareReplay(4));
		this.docsTotal$ = this.docs.docTotal$;
		this.docsLoaded$ = this.docs.docsLoaded$;
		this.selectedDoc$ = this.docs.selectedDoc$;
		this.opened = false;
		this.fetchingData = false;
	}

	ngOnChanges() {
		this.selectedDoc$.subscribe((v) => console.log('selected doc', v));
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	selectDoc(id) {
		console.log(id);
		this.docs.selectDoc(id);
	}
}
