import * as DocActions from './documents.actions';
import * as fromDocs from './documents.reducer';
import { mockDoc1, mockDoc2, Document } from '../../models';
import { mockDocType1, mockDocType2, CodeTable } from '../../models/code-table.model';

describe('DocumentsReducer', () => {
	const doc1 = mockDoc1 as Document;
	const doc2 = mockDoc2 as Document;
	const docType1 = mockDocType1 as CodeTable;
	const docType2 = mockDocType2 as CodeTable;

	const docsInitialState: fromDocs.DocsState = {
		ids: [ doc1.ID, doc2.ID ],
		entities: {
			[doc1.ID]: doc1,
			[doc2.ID]: doc2
		},
		selectedDocId: null,
		isLoading: false,
		loaded: true,
		docTypes: [ mockDocType1, mockDocType2 ]
	};

	describe('LOAD_DOCS_SUCCESS', () => {
		type DocActions = typeof DocActions.loadDocsSuccess;
		function noExistingLoans(action: DocActions, docsInitialState: any, documents: Document[]) {
			const createAction = action({ documents });

			const result = fromDocs.docsReducer(docsInitialState, createAction);

			expect(result).toMatchSnapshot();
		}

		it('should add all loans in the payload when none exist', () => {
			noExistingLoans(DocActions.loadDocsSuccess, docsInitialState, [ doc1, doc2 ]);
		});
	});

	describe('LOAD_DOCTYPES_SUCCESS', () => {
		type DocActions = typeof DocActions.loadDocTypesSuccess;
		function noExistingLoanDetail(action: DocActions, docsInitialState, docTypes: CodeTable[]) {
			const createAction = action({ docTypes });

			const result = fromDocs.docsReducer(docsInitialState, createAction);

			expect(result).toMatchSnapshot();
		}

		it('should should return the full loan detail for requested loan number', () => {
			noExistingLoanDetail(DocActions.loadDocTypesSuccess, docsInitialState, [ docType1, docType2 ]);
		});
	});

});
