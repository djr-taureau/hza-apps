import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Loan } from '@hza/shared/loans/models';
import { LoansFacade } from '@hza/shared/loans/data-access/state';
import { Observable, asyncScheduler } from 'rxjs';
import { observeOn, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'hza-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit {

  testLoans$: Observable<Loan[]>;
  @Input() message: string;
  @Input() loans: Loan[];
  
  constructor(private lf: LoansFacade) { }

  ngOnInit() {
    this.testLoans$ = this.lf.loans$.pipe(observeOn(asyncScheduler), shareReplay(4));
    this.testLoans$.subscribe(v => console.log('from test', v))
  }

}
