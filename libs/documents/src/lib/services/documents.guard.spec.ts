import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';
import { DocumentsGuard } from './documents.guard';
import { docsInitialState } from '../+state/documents/documents.reducer';

describe('Documents Guard', () => {
	let guard: DocumentsGuard;
	let store: MockStore;
	const initialState = { loaded: false };

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				// any modules needed
			],
			providers: [
				DocumentsGuard,
				provideMockStore({ initialState })
				// other providers
			]
		});

		store = TestBed.inject(MockStore);
		guard = TestBed.inject(DocumentsGuard);
	});

	it('should return false if the docs state is not loaded', () => {
		const expected = cold('(a|)', { a: false });

		expect(guard.canActivate()).toBeObservable(expected);
	});

	it('should return true if the docs state is loaded', () => {
		store.setState({ loaded: true });

		const expected = cold('(a|)', { a: true });

		expect(guard.canActivate()).toBeObservable(expected);
	});
});
