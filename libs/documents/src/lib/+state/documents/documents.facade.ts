import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { State, docsQuery } from '.';
import * as DocActions from './documents.actions';
import { Observable } from 'rxjs';

// ** The use of facades is good with managing state
// ** because it avoids having to inject your store into every container that needs to interact
// **
@Injectable()
export class DocsFacade {
  documents$ = this.store.select(docsQuery.selectAllDocs);
  docsLoaded$ = this.store.select(docsQuery.loadedDocs);

  docTotal$ = this.store.select(docsQuery.selectDocTotal);
  selectedDoc$ = this.store.select(docsQuery.selectCurrentDoc);

  // ** The Store gets injected one time for each facade

  constructor(private store: Store<State>) {}

  loadDocs() {
    this.store.dispatch(DocActions.loadDocs());
  }
  
  loadDocTypes() {
    this.store.dispatch(DocActions.loadDocTypes());
  }

  selectDoc(ID: number) {
    this.store.dispatch(DocActions.selectDoc({ ID }));
  }
}
