import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	OnDestroy,
	OnChanges,
	ViewChild,
	ViewContainerRef
} from '@angular/core';
import { runCssVarsPolyfill } from '@clr/core';
import { Observable, Subject, asyncScheduler } from 'rxjs';
import { observeOn, shareReplay } from 'rxjs/operators';
import { DocsFacade } from '../+state/documents/documents.facade';
import { Document } from '../models/document.model';
import { OpenFocusDirective } from '@hza/shared/utils';
import { LazyLoaderService } from '@hza/core';
import { Router } from '@angular/router';
import { themes } from './themes';

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

	constructor(private docs: DocsFacade, private lazyLoader: LazyLoaderService, private router: Router) {}

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
		console.log($event);
		this.router.navigate([$event]);
	}

	changeTheme(theme: any) {
		switchTheme(theme);
	}
}

const themePrefix = 'custom-theme_';

function toggleExistingThemes(themeToEnable: string) {
	const themeToEnableId = themePrefix + themeToEnable;
	const themeIds = [];

	for (const theme in themes) {
		if (themes.hasOwnProperty(theme)) {
			themeIds.push(themePrefix + theme);
		}
	}

	themeIds.filter((t) => t !== themeToEnableId).forEach((t) => {
		const themeNode = document.getElementById(t);
		if (themeNode !== null) {
			(themeNode as any).sheet.disabled = true;
		}
	});

	if (document.getElementById(themeToEnableId) !== null) {
		(document.getElementById(themeToEnableId) as any).sheet.disabled = false;
		return true;
	}

	return false;
}

function switchTheme(toTheme: string) {
	if (toggleExistingThemes(toTheme)) {
		return;
	}

	const newStyle = document.createElement('style');
	const theme = themes[toTheme];

	document.head.appendChild(newStyle);
	newStyle.id = themePrefix + toTheme;

	const myStyles = [':root { '];
	for (const item in theme) {
		if (theme.hasOwnProperty(item)) {
			myStyles.push(item);
			myStyles.push(': ');
			myStyles.push(theme[item]);
			myStyles.push('; ');
		}
	}
	myStyles.push('}');
	newStyle.innerHTML = myStyles.join('');

	runCssVarsPolyfill();

	return toTheme;
}
