import { createSelector, createFeatureSelector, combineReducers, Action, ActionReducerMap } from '@ngrx/store';
import * as fromDocs from './documents.reducer';


// ** This is an example of rolling up your reducers for a feature
// ** With this you will then include this in your feature module
export const docRepoFeatureKey = 'documents';


export interface State {
	[docRepoFeatureKey]: fromDocs.DocsState;
}

/** Provide reducer in AoT-compilation happy way */
export const reducers: ActionReducerMap<State> = {
	documents: fromDocs.docsReducer
}

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const selectDocRepoState = createFeatureSelector<fromDocs.DocsState>(docRepoFeatureKey);

// ** SELECTORS FOR LOANS


export const selectDocIds = createSelector(
  selectDocRepoState,
  fromDocs.selectDocIds
);
export const selectDocEntities = createSelector(
  selectDocRepoState,
  fromDocs.selectDocEntities
);
export const selectAllDocs = createSelector(
  selectDocRepoState,
  fromDocs.selectAllDocs
);
export const selectDocTotal = createSelector(
  selectDocRepoState,
  fromDocs.selectDocTotal
);
export const selectCurrentDocId = createSelector(
  selectDocRepoState,
  fromDocs.getSelectedDocId
);

export const selectDocTypes = createSelector(
  selectDocRepoState,
  fromDocs.getDocTypes
);

export const isLoadingDocs = createSelector(
  selectDocRepoState,
  fromDocs.isLoading
);

export const loadedDocs = createSelector(
  selectDocRepoState,
  fromDocs.loaded
);
 
export const selectCurrentDoc = createSelector(
  selectDocEntities,
  selectCurrentDocId,
  (docEntities, docId) => docEntities[docId]
);



export const docsQuery = {
	selectDocIds,
	selectDocEntities,
	selectAllDocs,
	selectDocTotal,
	isLoadingDocs,
	loadedDocs,
	selectCurrentDoc,
  selectDocTypes
};
