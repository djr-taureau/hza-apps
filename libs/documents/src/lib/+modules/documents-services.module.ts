import { NgModule } from '@angular/core';
import { ApiEndpointService, ApiService } from '@hza/shared/services';
import { DocsFacade } from '../+state/documents/documents.facade';
import { DocumentsGuard, DocumentsService } from '../services';

const PROVIDERS = [
	DocumentsService,
	DocsFacade,
	DocumentsGuard,
	ApiService,
	ApiEndpointService
];

@NgModule({
	imports: [],
	providers: PROVIDERS
})
export class DocumentsServicesModule {}
