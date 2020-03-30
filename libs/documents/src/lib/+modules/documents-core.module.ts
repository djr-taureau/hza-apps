import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


const MODULES = [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class DocumentsCoreModule {}
