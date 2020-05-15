import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Document } from './../../models/document.model';
import { CodeTable } from '../../models/code-table.model';



export const loadDocs = createAction('[documents] LOAD_DOCS');

export const loadDoc = createAction('[documents] Load Document', props<{ document: Document }>());
export const selectDoc = createAction('[documents] Select Document', props<{ ID: number }>());

export const loadDocTypes = createAction('[documents] LOAD_DOCS_TYPES');
export const loadDocTypesSuccess = createAction('[documents] LOAD_DOCTYPES_SUCCESS', props<{ docTypes: CodeTable[] }>())

export const loadDocsSuccess = createAction('[documents] LOAD_DOCS_SUCCESS', props<{ documents: Document[] }>());
export const loadDocsFail = createAction('[documents] LOAD_DOCS_FAIL', props<{ error: Error }>());
