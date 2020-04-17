
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiComponentsLayoutsModule } from '@hza/ui-components/layouts';
import { UiComponentsFormsModule } from '@hza/ui-components/forms';
import { SharedLoansDataAccessStateModule } from '@hza/shared/loans/data-access/state';
import { LoanDetailComponent } from './loan-detail/loan-detail.component';




@NgModule({
  imports: [
    CommonModule,
    UiComponentsLayoutsModule,
    UiComponentsFormsModule,
    SharedLoansDataAccessStateModule,
    RouterModule.forChild([
      { path: ':LoanNumber', component: LoanDetailComponent }
    ])
  ],
  declarations: [LoanDetailComponent]
})
export class SharedLoanDetailModule {}
