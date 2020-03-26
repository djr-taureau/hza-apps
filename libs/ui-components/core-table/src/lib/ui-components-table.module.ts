import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule, ScrollDispatcher } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { CoreTableFilterModule } from './filter/filter.module';
import { CoreTableMenuModule } from './menu/menu.module';
import { CoreTableVirtualScrollModule } from './virtual-scroll/virtual-scroll.module';

const MODULES = [
	CommonModule,
	CdkTableModule,
	CoreTableFilterModule,
	CoreTableMenuModule,
	CoreTableVirtualScrollModule,
	MatCheckboxModule,
	MatButtonModule,
	MatProgressBarModule,
	MatSortModule,
	MatPaginatorModule,
	MatTableModule,
	ScrollingModule
];

@NgModule({
	exports: MODULES,
	imports: MODULES,
	providers: [
		ScrollDispatcher
	]
})
export class UiComponentsTableModule {}
