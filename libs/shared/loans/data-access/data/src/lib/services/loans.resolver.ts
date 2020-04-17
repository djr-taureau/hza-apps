import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { filter, first, map, tap } from 'rxjs/operators';
import { LoansFacade } from '../+state/loans.facade';

@Injectable()
export class LoansResolver implements Resolve<boolean> {
  constructor(private loansFacade: LoansFacade) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.loansFacade.loansLoaded$.pipe(
      tap(loaded => {
        console.log('resolve');
        if (!loaded) {
          this.loansFacade.loadLoans();
        }
      }),
      filter(loaded => !!loaded),
      first(),
    );
  }
}
