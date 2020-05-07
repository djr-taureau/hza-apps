import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';

const MODULES = [NgCommonModule, RouterModule, MatSortModule, MatPaginatorModule, MatTableModule];

@NgModule({
  imports: [MODULES],
  exports: [MODULES],
})
export class DataListCoreModule {}
