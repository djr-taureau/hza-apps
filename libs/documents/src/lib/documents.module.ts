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
// ** RESOURCES FROM THIS MODULE
import { DocumentsContainer } from './containers/documents.container';
import { DocDetailComponent } from './components/doc-detail/doc-detail.component';
import { DocScrollComponent } from './components/doc-scroll/doc-scroll.component';
import { DocListComponent } from './components/doc-list/doc-list.component';
import { DocTableComponent } from './components/doc-table/doc-table.component';

const COMPONENTS = [
	DocumentsContainer,
	DocDetailComponent,
	DocScrollComponent,
	DocListComponent,
	DocTableComponent
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
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
