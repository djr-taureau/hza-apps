import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageComponent } from '@hza/ui-components/layouts';
import { DocFooterComponent } from '../components/doc-footer/doc-footer.component';
import { DocHeaderComponent } from '../components/doc-header/doc-header.component';
import { DocumentsContainer } from '../containers/documents/documents.container';
import { DocumentsGuard } from '../services/documents.guard';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'docs',
				component: PageComponent,
				data: {
					title: 'Doc Repository',
					pageLayout: 'full-page',
				},
				children: [
					{
						path: '',
						pathMatch: 'full',
						children: [
							{ path: '', outlet: 'page-header', component: DocHeaderComponent },
							// { path: '', component: DocumentsMainContainer },

							// { path: '', outlet: 'feature-one', component: LoanDetailComponent},
							{ path: '', outlet: 'feature-two', component: DocumentsContainer, canActivate: [DocumentsGuard] },

							{ path: '', outlet: 'page-footer', component: DocFooterComponent }
						]
					}
				]
			}
		])
	],
	exports: [RouterModule]
})
export class DocumentsRoutingModule {}
