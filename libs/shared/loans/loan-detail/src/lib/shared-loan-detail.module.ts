
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedUtilsModule } from '@hza/shared/utils';
import { UiComponentsLayoutsModule } from '@hza/ui-components/layouts';
import { UiComponentsFormsModule } from '@hza/ui-components/forms';
import { SharedLoansDataAccessStateModule } from '@hza/shared/loans/data-access/state';
import { SharedLoansDataAccessDataModule } from '@hza/shared/loans/data-access/data';
import { LoanDetailComponent, CardComponent } from './loan-detail/loan-detail.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedUtilsModule,
    UiComponentsLayoutsModule,
    UiComponentsFormsModule,
    SharedLoansDataAccessDataModule,
    SharedLoansDataAccessStateModule,
    RouterModule.forChild([
      { path: '', component: LoanDetailComponent }
    ])
  ],
  declarations: [LoanDetailComponent, CardComponent],
  exports: [LoanDetailComponent, CardComponent]
})
export class SharedLoanDetailModule {}
