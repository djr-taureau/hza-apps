import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageComponent } from '@hza/ui-components/layouts';
import { DocFooterComponent } from '../components/doc-footer/doc-footer.component';
import { DocHeaderComponent } from '../components/doc-header/doc-header.component';
import { DocumentsContainer } from '../containers/documents/documents.container';
import { DocumentsGuard } from '../services/documents.guard';
import { LoanDetailComponent } from '@hza/shared/loans/loan-detail';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'docs',
				component: PageComponent,
				data: {
					title: 'Doc Repository',
					pageLayout: 'full-page'
				},
				children: [
					{
						path: '',
						pathMatch: 'full',
						children: [
							{ path: '', outlet: 'page-header', component: DocHeaderComponent },
							{ path: '', outlet: 'page-footer', component: DocFooterComponent }
						]
					},
					{
						path: 'repo',
						children: [
							{ path: '', outlet: 'feature-one', component: LoanDetailComponent },
							{ path: '', outlet: 'feature-two', component: DocumentsContainer, canActivate: [DocumentsGuard] }
							// { path: '', outlet: 'feature-two', component: DocumentsContainer },
							// { path: '', outlet: 'feature-three', component: FooComponent },
						]
					}
				]
			}
		])
	],
	exports: [RouterModule]
})
export class DocumentsRoutingModule {}
