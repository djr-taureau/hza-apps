import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';

const MODULES = [CommonModule, RouterModule, MatSortModule, MatPaginatorModule, MatTableModule];

@NgModule({
  imports: [MODULES],
  exports: [MODULES],
})
export class DataListCoreModule {}
