import { Observable, Subject, asyncScheduler } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, OnChanges, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentType } from '@angular/cdk/portal';
import { LoansFacade } from '@hza/shared/loans/data-access/state';
import { Loan } from '@hza/shared/loans/models';
import { observeOn, shareReplay, tap, filter, take } from 'rxjs/operators';
import { OverlayService } from '@hza/ui-components/overlay';
import { BehaviorSubject } from 'rxjs';
import { LoanQuery } from '@hza/shared/loans/models';
@Component({
	selector: 'hza-loans-container',
	template: `
    <hza-loan-search
		[loansLoaded]="loansLoaded$ | async"
		[loanQuery]="loanQuery$ | async"
		[loans]="loans$ | async"
		(clearQuery)="clearQuery($event)"
		(query)="searchLoans($event)"
		(loanNumber)="selectLoan($event)">
    </hza-loan-search>
	`,
	styleUrls: ['./loans.container.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoansContainer implements OnInit, OnDestroy, OnChanges {
	loansLoaded$: Observable<Boolean>;
	loans$: Observable<Loan[]>;
	loansTotal$: Observable<number>;
	loanQuery$: Observable<LoanQuery>;
	selectedLoan$: Observable<Loan>;
	loansContainer = null;
	unsubscribe$: Subject<void> = new Subject();
	opened: boolean;

	constructor(private loansFacade: LoansFacade, private overlayService: OverlayService, private router: Router) {}

	ngOnInit() {
		this.opened = false;
		this.loansLoaded$ = this.loansFacade.loansLoaded$;
		this.loanQuery$ = this.loansFacade.loanQuery$;
		this.loans$ = this.loansFacade.loans$.pipe(observeOn(asyncScheduler), shareReplay(4));
		this.loansTotal$ = this.loansFacade.loanTotal$;
		this.selectedLoan$ = this.loansFacade.selectedLoan$;
		this.selectedLoan$.subscribe((v) => console.log('selected loan', v));
		this.loans$.subscribe((v) => console.log('loans', v));
		this.loanQuery$.subscribe((v) => console.log('loan query', v));
	}

	ngOnChanges() {
		this.selectedLoan$.subscribe((v) => console.log('selected loan', v));
		this.loans$.subscribe((v) => console.log('loans', v));
		this.loanQuery$.subscribe((v) => console.log('loan query', v));
		console.log('loanQu', this.getLoan());
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	selectLoan(id) {
		this.loansFacade.selectLoan(id);
		const foo = this.loansFacade.selectedLoan$.pipe(tap((data) => data), filter((data) => !!data), take(1));
		foo.subscribe(v => console.log('loan', v));
		this.router.navigate(['docs/repo']);
		// this.router.navigate(['../', { id: crisisId, foo: 'foo'}], { relativeTo: this.route });
		this.selectedLoan$.subscribe((v) => console.log('selected loan', v));
	}

	searchLoans(query: LoanQuery) {
		console.log('container', query);
		this.loansFacade.queryLoans(query);
	}

	clearQuery($event) {
		console.log('container', $event);
		if ($event === 'clear') {
			this.loansFacade.clearLoans();
		}
	}

	openModal() {
		this.opened = !this.opened;
		// this.open(this.loanSearch);
	}

	getLoan() {
		// ** Demonstrating two ways to check. We need docs and loan info
		//  ** Check for Docs here via facade
		return this.loansFacade.selectedLoan$.pipe(tap((data) => data), filter((data) => !!data), take(1));
	}
	open(content: TemplateRef<any> | ComponentType<any> | string) {
		const ref = this.overlayService.open(content, null);

		ref.afterClosed$.subscribe((res) => {
			this.loansContainer = res.data;
			console.log(res.data);
		});
	}
}
