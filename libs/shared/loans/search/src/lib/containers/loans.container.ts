import { ComponentType } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { LoansFacade } from '@hza/shared/loans/data-access/state';
import { Loan, LoanDetailDoc, LoanQuery } from '@hza/shared/loans/models';
import { OverlayService } from '@hza/ui-components/overlay';
import { asyncScheduler, Observable, Subject } from 'rxjs';
import { filter, observeOn, shareReplay, take, tap } from 'rxjs/operators';
@Component({
  selector: 'hza-loans-container',
  template: `
    <hza-loan-search
      [loansLoaded]="loansLoaded$ | async"
      [loanQuery]="loanQuery$ | async"
      [loans]="loans$ | async"
      (clearQuery)="clearQuery($event)"
      (query)="searchLoans($event)"
      (loanNumber)="selectLoan($event)"
    >
    </hza-loan-search>
  `,
  styleUrls: ['./loans.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoansContainer implements OnInit, OnDestroy, OnChanges {
  loansLoaded$: Observable<Boolean>;
  loans$: Observable<Loan[]>;
  loansTotal$: Observable<number>;
  loanQuery$: Observable<LoanQuery>;
  selectedLoan$: Observable<Loan>;
  loanDetail$: Observable<LoanDetailDoc>;
  loansContainer = null;
  unsubscribe$: Subject<void> = new Subject();
  opened: boolean;
  loanTest: boolean;

  constructor(
    private loansFacade: LoansFacade,
    private overlayService: OverlayService,
    private router: Router
  ) {}

  ngOnInit() {
    this.opened = false;
    this.loanTest = true;
    this.loansLoaded$ = this.loansFacade.loansLoaded$;
    this.loanQuery$ = this.loansFacade.loanQuery$;
    this.loanDetail$ = this.loansFacade.loanDetail$;
    this.loans$ = this.loansFacade.loans$.pipe(
      observeOn(asyncScheduler),
      shareReplay(4)
    );
    this.loansTotal$ = this.loansFacade.loanTotal$;
    this.selectedLoan$ = this.loansFacade.selectedLoan$;
    this.loans$.subscribe((v) => console.log('loans', v));
    this.loanQuery$.subscribe((v) => console.log('loan query', v));
  }

  ngOnChanges() {
    this.selectedLoan$.subscribe((v) => console.log('selected loan', v));
    this.loans$.subscribe((v) => console.log('loans', v));
    this.loanQuery$.subscribe((v) => console.log('loan query', v));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  selectLoan(id) {
    console.log('loan# from container', id);
    this.loansFacade.selectLoan(id);
    this.loansFacade.getLoanDetail(id);
    this.router.navigate(['docs/repo']);
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
  }

  getLoan() {
    // ** Demonstrating two ways to check. We need docs and loan info
    //  ** Check for Docs here via facade
    return this.loansFacade.selectedLoan$.pipe(
      tap((data) => data),
      filter((data) => !!data),
      take(1)
    );
  }
  open(content: TemplateRef<any> | ComponentType<any> | string) {
    const ref = this.overlayService.open(content, null);

    ref.afterClosed$.subscribe((res) => {
      this.loansContainer = res.data;
      console.log(res.data);
    });
  }
}
