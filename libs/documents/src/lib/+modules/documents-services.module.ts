import { NgModule } from '@angular/core';
import { DocsFacade } from '../+state/documents/documents.facade';
import { DocumentsService, DocumentsGuard } from '../services';
import { ApiService, ApiEndpointService } from '@hza/core';

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
