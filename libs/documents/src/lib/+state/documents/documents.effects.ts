import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DocumentsService } from './../../services/documents.service';
import * as DocActions from './documents.actions';
import { DocsFacade } from './documents.facade';

@Injectable()
export class DocEffects {
  // ** the use of switchMap is important here because as soon as it completed task it turns the
  // ** the observable off and waits for the next request or action to be dispatched
  loadDocs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DocActions.loadDocs),
      switchMap(() =>
        this.docService.getDocuments().pipe(
          map(documents => DocActions.loadDocsSuccess({ documents })),
          catchError(error => of(DocActions.loadDocsFail(error))),
        ),
      ),
    ),
  );
  
    loadDocTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DocActions.loadDocTypes),
      switchMap(() =>
        this.docService.getDocumentTypes().pipe(
          map(docTypes => DocActions.loadDocTypesSuccess({ docTypes }))
        ),
      ),
    ),
  );



  constructor(private actions$: Actions, private docService: DocumentsService, private facade: DocsFacade) {}
}
