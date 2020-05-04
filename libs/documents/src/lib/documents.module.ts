// ** ANGULAR MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// ** THIRD PARTY MODULES

// ** MODULES FOR THIS FEATURE LIB * CUSTOM MODULES
import {
	DocumentsCoreModule,
	DocumentsRoutingModule,
	DocumentsStateModule,
	DocumentsServicesModule,
	DocumentsUiModule
} from './+modules';
import { SharedLoansSearchModule } from '@hza/shared/loans/search';
import { SharedLoanDetailModule } from '@hza/shared/loans/loan-detail';
// ** RESOURCES FROM THIS MODULE
import { DocumentsMainContainer } from './containers/documents-main/documents-main.container';
import { DocumentsContainer } from './containers/documents/documents.container';
import { DocDetailComponent } from './components/doc-detail/doc-detail.component';
import { DocScrollComponent } from './components/doc-scroll/doc-scroll.component';
import { DocListComponent } from './components/doc-list/doc-list.component';
import { DocTableComponent } from './components/doc-table/doc-table.component';
import { DocHeaderComponent } from './components/doc-header/doc-header.component';
import { DocFooterComponent } from './components/doc-footer/doc-footer.component';
import { FooComponent } from './components/foo/foo.component';
import { DocDataListComponent } from './components/doc-data-list/doc-data-list.component';



const COMPONENTS = [
	DocumentsMainContainer,
	DocumentsContainer,
	DocHeaderComponent,
	DocFooterComponent,
	DocDetailComponent,
	DocScrollComponent,
	DocListComponent,
	DocTableComponent,
	FooComponent,
	DocDataListComponent,
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		SharedLoansSearchModule,
		SharedLoanDetailModule,
		DocumentsCoreModule,
		DocumentsUiModule,
		DocumentsRoutingModule,
		DocumentsServicesModule,
		DocumentsStateModule
	],
	declarations: [COMPONENTS],
	providers: []
})
export class DocumentsModule {}
