import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


const MODULES = [CommonModule, HttpClientModule, ReactiveFormsModule];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class LoansCoreModule {}
