import { Observable, Subject, asyncScheduler } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, OnChanges } from '@angular/core';
import { LoansFacade } from '../+state/loans.facade';
import { Loan } from '../models/loan.model';
import { observeOn, shareReplay } from 'rxjs/operators';

@Component({
	selector: 'fay-loans-container',
	templateUrl: './loans.container.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoansContainer implements OnInit, OnDestroy, OnChanges {
	loansLoaded$: Observable<Boolean>;
	loans$: Observable<Loan[]>;
	loansTotal$: Observable<number>;
	selectedLoan$: Observable<Loan>;

	unsubscribe$: Subject<void> = new Subject();

	constructor(private loansFacade: LoansFacade) {}

	ngOnInit() {
		this.loansLoaded$ = this.loansFacade.loansLoaded$;
		this.loans$ = this.loansFacade.loans$.pipe(observeOn(asyncScheduler), shareReplay(4));
		this.loansTotal$ = this.loansFacade.loanTotal$;
		this.selectedLoan$ = this.loansFacade.selectedLoan$;
		this.selectedLoan$.subscribe((v) => console.log('selected loan', v));
		this.loans$.subscribe((v) => console.log('loans', v));
	}

	ngOnChanges() {
		this.selectedLoan$.subscribe((v) => console.log('selected loan', v));
		this.loans$.subscribe((v) => console.log('loans', v));
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	selectLoan(id) {
		this.loansFacade.selectLoan(id);
		this.selectedLoan$.subscribe((v) => console.log('selected loan', v));
	}
}
