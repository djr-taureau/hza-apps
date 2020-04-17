
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'detail',
    loadChildren: () =>
      import('@hza/shared/loans/loan-detail').then(
        m => m.SharedLoanDetailModule
      )
  },
  {
    path: 'search',
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
