import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DocumentsContainer } from '../containers/documents/documents.container';
import { DocumentsGuard } from '../services/documents.guard';
import { PageComponent } from '@hza/ui-components/layouts';
import { DocHeaderComponent } from '../components/doc-header/doc-header.component';
import { DocFooterComponent } from '../components/doc-footer/doc-footer.component';
import { LoanDetailComponent } from '../components/loan-detail/loan-detail.component';
import { DocumentsMainContainer } from '../containers/documents-main/documents-main.container';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'docs',
				component: PageComponent,
				data: {
					title: 'Doc Repository'
				},
				children: [
					{
						path: '',
						pathMatch: 'full',
						children: [
							{ path: '', outlet: 'page-header', component: DocHeaderComponent },
							{ path: '', component: DocumentsMainContainer },
							
								{ path: '', outlet: 'feature-one', component: LoanDetailComponent},
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
