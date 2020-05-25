// ** ANGULAR MODULES
import { ScrollDispatcher, ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedLoanDetailModule } from '@hza/shared/loans/loan-detail';
import { SharedLoansSearchModule } from '@hza/shared/loans/search';
// ** THIRD PARTY MODULES
// ** MODULES FOR THIS FEATURE LIB * CUSTOM MODULES
import { DocumentsCoreModule, DocumentsRoutingModule, DocumentsServicesModule, DocumentsStateModule, DocumentsUiModule } from './+modules';
import { DocDetailComponent } from './components/doc-detail/doc-detail.component';
import { DocFooterComponent } from './components/doc-footer/doc-footer.component';
import { DocHeaderComponent } from './components/doc-header/doc-header.component';
import { DocListComponent } from './components/doc-list/doc-list.component';
import { DocTableComponent } from './components/doc-table/doc-table.component';
import { DocUploadFormComponent } from './components/doc-upload-form/doc-upload-form.component';
// ** RESOURCES FROM THIS MODULE
import { DocumentsContainer } from './containers/documents/documents.container';

const COMPONENTS = [
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
