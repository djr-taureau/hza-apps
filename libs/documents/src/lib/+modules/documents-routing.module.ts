import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DocumentsContainer } from '../containers/documents.container';
import { DocumentsGuard } from '../services/documents.guard';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'docs',
				component: DocumentsContainer,
				canActivate: [
					DocumentsGuard
				]
			}
		])
	],
	exports: [
		RouterModule
	]
})
export class DocumentsRoutingModule {}
