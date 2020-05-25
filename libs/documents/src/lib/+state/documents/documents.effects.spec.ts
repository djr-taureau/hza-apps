import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { createSpyObject, mockProvider, SpyObject } from '@ngneat/spectator';
import { LoansService } from '@hza/shared/loans/data-access/data';
import { Loan, mockLoan1, mockLoan2, mockLoanQuery } from '@hza/shared/loans/models';
import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { DataPersistence, NxModule } from '@nrwl/angular';
import { cold, hot } from '@nrwl/angular/testing';
import { Observable, of } from 'rxjs';
import { docsQuery } from './index';
import * as DocActions from './documents.actions';
import { DocEffects } from './documents.effects';
import { DocumentsService } from '../../services';
import { mockDoc1, mockDoc2, Document } from '../../models';

describe('DocEffects', () => {
	let actions: Observable<any>;
	let effects: DocEffects;
	let docsStub: SpyObject<DocumentsService>;
	let docService: DocumentsService;
	const doc1 = mockDoc1 as Document;
	const doc2 = mockDoc2 as Document;
	const documents = [ doc1, doc2 ];

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
				NxModule.forRoot(),
				StoreModule.forRoot({}),
				EffectsModule.forRoot([])
			],
			providers: [
				DocEffects,
				{ provide: DocumentsService, useValue: { getDocuments: () => of(documents) } },
				mockProvider(DocumentsService),
				DataPersistence,
				provideMockActions(() => actions)
				// provideMockStore({
				// 	selectors: [
				// 		{
				// 			selector: docsQuery.selectAllDocs,
				// 			value: documents
				// 		}
				// 	]
				// })
			]
		});

		effects = TestBed.inject(DocEffects);
		docService = TestBed.inject(DocumentsService);
		docsStub = TestBed.inject(DocumentsService) as SpyObject<DocumentsService>;
	});


	describe('loadDocs$', () => {
		it('should load loan docs', () => {
			const action = DocActions.loadDocs();
			const outcome = DocActions.loadDocsSuccess({ documents });

			actions = hot('-a', { a: action });
			const response = cold('-a|', { a: documents });
			docsStub.getDocuments.and.returnValue(response);

			const expected = cold('--b', { b: outcome });
			expect(effects.loadDocs$).toBeObservable(expected);
		});
	});
});
