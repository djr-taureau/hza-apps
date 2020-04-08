// import { TestBed } from '@angular/core/testing';
// import { DocumentsService } from '../../services/documents.service';
// import { Actions } from '@ngrx/effects';
// import { cold, hot } from 'jasmine-marbles';
// import { Observable, empty } from 'rxjs';
// import * as DocActions from './documents.actions';
// import { DocEffects } from './documents.effects';
// import { Document } from '../../models/document.model';

// export class TestActions extends Actions {
//   constructor() {
//     super(empty());
//   }

//   set stream(source: Observable<any>) {
//     this.source = source;
//   }
// }

// export function getActions() {
//   return new TestActions();
// }

// describe('DocEffects', () => {
//   let effects: DocEffects;
//   let actions$: TestActions;
//   let documentsService: any;

//   const document1: Document =     {
//       "id": 1,
//       "Documentid": "EAF572FC-5086-4908-B862-B1C013CDA5C7",
//       "MetaDataType": "NULL",
//       "MetaDataValue": "NULL",
//       "LoanNumber": "0000123456",
//       "Sourceid": 1,
//       "Key1": "NULL",
//       "Key2": "NULL",
//       "Key3": "NULL",
//       "DocFileName": "1MB.txt",
//       "DocType": "undefined",
//       "FileSize": 1048576,
//       "CreatedDated": "2019-10-10 08:46:56.4629789",
//       "CreatedBy": "colsen",
//       "IsDeleted": 1,
//       "DeletedDated": "2019-10-10 15:44:22.2884661",
//       "DeletedBy": "colsen",
//       "UpdatedDate": "NULL",
//       "UpdatedBy": "NULL",
//       "Extension": ".txt",
//       "MeridianImport": 0,
//       "ScanStatus": 2
//     },
//     document2: Document =     {
//       "id": 2,
//       "Documentid": "601DC455-4346-4BC4-98D7-76E939CCCC46",
//       "MetaDataType": "NULL",
//       "MetaDataValue": "NULL",
//       "LoanNumber": "0000123456",
//       "Sourceid": 1,
//       "Key1": "NULL",
//       "Key2": "NULL",
//       "Key3": "NULL",
//       "DocFileName": "1MB.txt",
//       "DocType": "undefined",
//       "FileSize": 1048576,
//       "CreatedDated": "2019-10-10 08:54:53.3986677",
//       "CreatedBy": "colsen",
//       "IsDeleted": 1,
//       "DeletedDated": "2019-10-10 15:44:26.1158488",
//       "DeletedBy": "colsen",
//       "UpdatedDate": "NULL",
//       "UpdatedBy": "NULL",
//       "Extension": ".txt",
//       "MeridianImport": 0,
//       "ScanStatus": 2
//     },
//     documents = [document1, document2];

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         DocEffects,
//         {
//           provide: DocumentsService,
//           useValue: { load: jest.fn() }
//         },
//         {
//           provide: Actions,
//           useFactory: getActions
//         }
//       ]
//     });

//     effects = TestBed.get(DocEffects);
//     documentsService = TestBed.get(DocumentsService);
//     actions$ = TestBed.get(Actions);
//   });

//   describe('load$', () => {
//     it('should return a new customer.LoadSuccess, with the documents, on success', () => {
//       const action = new DocActions.loadDocs(),
//         completion = new DocActions.loadDocsSuccess({documents}),
//         response = cold('a|', { a: documents }),
//         expected = cold('-b', { b: completion });

//       actions$.stream = hot('-a', { a: action });

//       // mock the load function to be the response
//       documentsService.load = jest.fn(() => response);

//       expect(effects.loadDocs$).toMatchSnapshot();
//     });

//     it('should return a new customer.LoadError, on fail', () => {
//       const action = new Load(),
//         completion = new LoadFail('error'),
//         response = cold('#'),
//         expected = cold('-b', { b: completion });

//       actions$.stream = hot('-a', { a: action });

//       // mock the load function to be the response
//       documentsService.load = jest.fn(() => response);

//       expect(effects.load$).toMatchSnapshot();
//     });
//   });
// });
