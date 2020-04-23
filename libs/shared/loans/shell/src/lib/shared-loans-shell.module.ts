
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'loan-detail',
    loadChildren: () =>
      import('@hza/shared/loans/loan-detail').then(
        m => m.SharedLoanDetailModule
      )
  },
  {
    path: '',
    loadChildren: () =>
      import('@hza/shared/loans/search').then(
        m => m.SharedLoansSearchModule
      )
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class SharedLoansShellModule {}
