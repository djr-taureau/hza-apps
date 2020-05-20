// ** ANGULAR MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ScrollDispatcher, ScrollingModule } from '@angular/cdk/scrolling';
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
import { DocListComponent } from './components/doc-list/doc-list.component';
import { DocTableComponent } from './components/doc-table/doc-table.component';
import { DocHeaderComponent } from './components/doc-header/doc-header.component';
import { DocFooterComponent } from './components/doc-footer/doc-footer.component';
import { DocUploadFormComponent } from './components/doc-upload-form/doc-upload-form.component';




const COMPONENTS = [
	DocumentsMainContainer,
	DocumentsContainer,
	DocHeaderComponent,
	DocFooterComponent,
	DocDetailComponent,
	DocListComponent,
	DocTableComponent,
	DocUploadFormComponent
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ScrollingModule,
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
	providers: [ScrollDispatcher]
})
export class DocumentsModule {}
