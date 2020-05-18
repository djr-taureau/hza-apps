import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { docsQuery, State } from '../+state/documents';
import { catchError, filter, switchMap, take, tap, first } from 'rxjs/operators';
import { DocsFacade } from '../+state/documents/documents.facade';


@Injectable()
export class DocumentsGuard implements CanActivate {
	constructor(
    private docsFacade: DocsFacade,
    private store: Store<State>
  ) {}

	canActivate(): Observable<boolean> {
		this.prefetch();
		this.getDocs();
		// ** Check the store to make sure the loaded value is set to true
		return this.store.pipe(
			select(docsQuery.loadedDocs),
			tap((loaded) => loaded),
			filter((loaded) => loaded),
			first()
		);
	}

	private getDocs() {
		// ** Demonstrating two ways to check. We need docs and loan info
		//  ** Check for Docs here via facade
		return this.docsFacade.documents$.pipe(tap((data) => data), filter((data) => !!data), take(1));
	}

	private prefetch() {
		// ** facades interact with the store. These two methods dispatch the actions for loading
		this.docsFacade.loadDocTypes();
		this.docsFacade.loadDocs();
	}
}
