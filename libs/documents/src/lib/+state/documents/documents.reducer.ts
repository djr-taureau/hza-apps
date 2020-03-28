import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Document } from './../../models/document.model';
import * as DocActions from './documents.actions';

// ** This reducer is what each reducer will look like for an entity with the standard
// ** state interface
export const docsFeatureKey = 'documents';

export interface DocsState extends EntityState<Document> {
  selectedDocId: number | null;
  isLoading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Document> = createEntityAdapter<Document>({
  selectId: (document: Document) => document.id,
  sortComparer: false,
});

export const docsInitialState: DocsState = adapter.getInitialState({
  ids: [],
  selectedDocId: null,
  isLoading: false,
  loaded: false,
});

export const reducer = createReducer(
  docsInitialState,
  /**
   * The addMany function provided by the created adapter
   * adds many records to the entity dictionary
   * and returns a new state including those records. If
   * the collection is to be sorted, the adapter will
   * sort each record upon entry into the sorted array.
   */
  //  ** when this action is dispatched isLoading set to true
  on(DocActions.loadDocs, state => ({
    ...state,
    isLoading: true,
  })),
  on(DocActions.loadDocsSuccess, (state, { documents }) => adapter.addMany(documents, state)),
  // ** When the documents have loaded successfully, isLoaded toggled off again
  // ** loaded set to TRUE
  on(DocActions.loadDocsSuccess, state => ({
    ...state,
    isLoading: false,
    loaded: true,
  })),
  /**
   * The addOne function provided by the created adapter
   * adds one record to the entity dictionary
   * and returns a new state including that records if it doesn't
   * exist already. If the collection is to be sorted, the adapter will
   * insert the new record into the sorted array.
   */
  // ** Select an individual document for docment detail
  on(DocActions.loadDoc, (state, { document }) => adapter.addOne(document, state)),
  on(DocActions.selectDoc, (state, { id }) => ({
    ...state,
    selectedDocId: id,
  })),
);

export function docsReducer(state: DocsState | undefined, action: Action): DocsState {
  return reducer(state, action);
}

// ** selectors are slices of your state that can be rolled up with other reducers
// **

export const getSelectedDocId = (state: DocsState) => state.selectedDocId;
export const isLoading = (state: DocsState) => state.isLoading;
export const loaded = (state: DocsState) => state.loaded;


// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectDocIds = selectIds;

export const selectDocEntities = selectEntities;

export const selectAllDocs = selectAll;

export const selectDocTotal = selectTotal;
