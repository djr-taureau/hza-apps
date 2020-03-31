import { Observable, Subject, asyncScheduler } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, OnChanges , ViewChild, ElementRef} from '@angular/core';
import { LoansFacade } from '../+state/loans.facade';
import { Loan } from '../models/loan.model';
import { observeOn, shareReplay } from 'rxjs/operators';

@Component({
	selector: 'hza-loans-container',
		queries: {
		nameRef: new ViewChild('nameRef')
	},
	templateUrl: './loans.container.html',
	styleUrls: ['./loans.container.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoansContainer implements OnInit, OnDestroy, OnChanges {

   public nameRef!: ElementRef;
	loansLoaded$: Observable<Boolean>;
	loans$: Observable<Loan[]>;
	loansTotal$: Observable<number>;
	selectedLoan$: Observable<Loan>;

	unsubscribe$: Subject<void> = new Subject();
	opened: boolean;
	constructor(private loansFacade: LoansFacade) {
	}

	ngOnInit() {
		this.opened = true;
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
	
  	openModal() {
		this.opened = !this.opened;
	}

	public ngAfterViewInit() : void {
		this.focusInput();
	}
  
  	private focusInput() : void {
		this.nameRef.nativeElement.focus();
	}
}
