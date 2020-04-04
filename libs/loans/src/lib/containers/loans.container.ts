import { Observable, Subject, asyncScheduler, Subscription } from 'rxjs';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  OnChanges,
  ViewChild,
  ViewContainerRef,
  HostListener,
  TemplateRef,
  ElementRef,
} from '@angular/core';
import { RouterOutlet, Router, ActivationStart } from '@angular/router';
import { ComponentType } from '@angular/cdk/portal';
import { EventBusService, Events } from '@hza/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortalDirective, ComponentPortal } from '@angular/cdk/portal';
import { LoansFacade } from '../+state/loans.facade';
import { Loan } from '../models/loan.model';
import { observeOn, shareReplay } from 'rxjs/operators';
import { OverlayService, OpenFocusDirective } from '@hza/ui-components/overlay';
@Component({
  selector: 'hza-loans-container',
  // queries: {
  //   nameRef: new ViewChild('nameRef'),
  // },
  templateUrl: './loans.container.html',
  styleUrls: ['./loans.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoansContainer implements OnInit, OnDestroy, OnChanges {
  //   @ViewChild(RouterOutlet) outlet: RouterOutlet;
  // public nameRef!: ElementRef;
  loansLoaded$: Observable<Boolean>;
  eventbusSub: Subscription;
  loans$: Observable<Loan[]>;
  loansTotal$: Observable<number>;
  selectedLoan$: Observable<Loan>;
  // loansContainer = null;
  unsubscribe$: Subject<void> = new Subject();
  opened: boolean;

  constructor(
    private router: Router,
    private eventBus: EventBusService,
    private loansFacade: LoansFacade,
  ) {}

  ngOnInit() {
    this.opened = true;
    this.loansLoaded$ = this.loansFacade.loansLoaded$;
    this.loans$ = this.loansFacade.loans$.pipe(
      observeOn(asyncScheduler),
      shareReplay(4)
    );
    this.loansTotal$ = this.loansFacade.loanTotal$;
    this.selectedLoan$ = this.loansFacade.selectedLoan$;
    this.selectedLoan$.subscribe((v) => console.log('selected loan', v));
    this.loans$.subscribe((v) => console.log('loans', v));
    this.eventbusSub = this.eventBus.on(Events.OpenModal, (event => console.log(event)));
  }

  ngOnChanges() {
    this.selectedLoan$.subscribe((v) => console.log('selected loan', v));
    this.loans$.subscribe((v) => console.log('loans', v));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.eventbusSub.unsubscribe();
  }

  selectLoan(id) {
    this.loansFacade.selectLoan(id);
    this.selectedLoan$.subscribe((v) => console.log('selected loan', v));
  }

}
