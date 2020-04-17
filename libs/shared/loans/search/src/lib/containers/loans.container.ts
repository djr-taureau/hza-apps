import { Observable, Subject, asyncScheduler } from 'rxjs';
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
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortalDirective, ComponentPortal } from '@angular/cdk/portal';
import { LoansFacade } from '@hza/shared/loans/data-access/state';
import { Loan } from '@hza/shared/loans/models';
import { observeOn, shareReplay } from 'rxjs/operators';
import { OverlayService, OpenFocusDirective } from '@hza/ui-components/overlay';
@Component({
  selector: 'hza-loans-container',
  queries: {
    nameRef: new ViewChild('nameRef'),
  },
  templateUrl: './loans.container.html',
  styleUrls: ['./loans.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoansContainer implements OnInit, OnDestroy, OnChanges {
  //   @ViewChild(RouterOutlet) outlet: RouterOutlet;
  public nameRef!: ElementRef;
  loansLoaded$: Observable<Boolean>;
  loans$: Observable<Loan[]>;
  loansTotal$: Observable<number>;
  selectedLoan$: Observable<Loan>;
  loansContainer = null;
  unsubscribe$: Subject<void> = new Subject();
  opened: boolean;

  loanSearch;

  constructor(
    private router: Router,
    private loansFacade: LoansFacade,
    private overlayService: OverlayService
  ) {}

  ngOnInit() {
    // this.router.events.subscribe(e => {
    // 	if (e instanceof ActivationStart && e.snapshot.outlet === 'modal')
    // 		this.outlet.deactivate();
    // });
    this.opened = false;
    this.loansLoaded$ = this.loansFacade.loansLoaded$;
    this.loans$ = this.loansFacade.loans$.pipe(
      observeOn(asyncScheduler),
      shareReplay(4)
    );
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

  openModal() {
    this.opened = !this.opened;
    this.open(this.loanSearch);
  }

  public ngAfterViewInit(): void {
    this.focusInput();
  }

  private focusInput(): void {
    this.nameRef.nativeElement.focus();
  }

  open(content: TemplateRef<any> | ComponentType<any> | string) {
    const ref = this.overlayService.open(content, null);

    ref.afterClosed$.subscribe((res) => {
      this.loansContainer = res.data;
      console.log(res.data);
    });
  }
}
