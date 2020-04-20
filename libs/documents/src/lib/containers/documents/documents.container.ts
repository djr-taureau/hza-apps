import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	OnDestroy,
	OnChanges,
	ViewChild,
	ViewContainerRef,
	HostListener,
	TemplateRef
} from '@angular/core';
import { Router } from '@angular/router';
import { ComponentType } from '@angular/cdk/portal';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortalDirective, ComponentPortal } from '@angular/cdk/portal';
import { runCssVarsPolyfill } from '@clr/core';
import { Observable, Subject, asyncScheduler } from 'rxjs';
import { observeOn, shareReplay } from 'rxjs/operators';
import { DocsFacade } from '../../+state/documents/documents.facade';
import { Document } from '../../models/document.model';
import { LazyLoaderService } from '@hza/core';
import { LoanSearchBoxComponent } from '@hza/shared/loans/search';
import { OverlayService, OpenFocusDirective } from '@hza/ui-components/overlay';
import { themes } from '../themes';
import { Directive } from '@angular/core';


@Component({
	selector: 'fay-doc-repo',
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

	fetchingData: boolean;

	@ViewChild('loanSearch', { read: ViewContainerRef, static: false })
	loanSearch: ViewContainerRef;

	constructor(
		private docs: DocsFacade,
		private lazyLoader: LazyLoaderService,
		private router: Router,
		private overlayService: OverlayService
	) {}

	ngOnInit() {
		this.documents$ = this.docs.documents$.pipe(observeOn(asyncScheduler), shareReplay(4));
		this.docsTotal$ = this.docs.docTotal$;
		this.docsLoaded$ = this.docs.docsLoaded$;
		this.selectedDoc$ = this.docs.selectedDoc$;
		this.opened = false;
		this.fetchingData = false;
		runCssVarsPolyfill();
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

	openModal($event) {
		// this.opened = !this.opened;
		console.log($event);
		this.router.navigate([{ outlets: { modal: [$event] } }]);
		// [{ outlets: { primary: ['docs'], modal: [$event] } }]
	}

	// open(content: TemplateRef<any> | ComponentType<any> | string) {
	// 	const ref = this.overlayService.open(content, null);

	// 	ref.afterClosed$.subscribe((res) => {
	// 		if (typeof content === 'string') {
	// 		} else if (content === this.loansContainer) {
	// 			this.loansContainerResponse = res.data;
	// 		} else {
	// 			console.log(res.data);
	// 		}
	// 	});
	// }
}
