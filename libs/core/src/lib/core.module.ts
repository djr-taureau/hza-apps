import { HttpBackendClient } from '@hza/shared/services';
// core.module.ts
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreCoreModule, SharedDataAccessModule } from './+modules';
import { httpInterceptorProviders } from './http-interceptors';

@NgModule({
	imports: [ CoreCoreModule, SharedDataAccessModule.forRoot() ],
	providers: [ httpInterceptorProviders, HttpBackendClient ]
})
export class CoreModule {
	constructor(
		@Optional()
		@SkipSelf()
		parentModule: CoreModule
	) {
		if (parentModule) {
			throw new Error('CoreModule is already loaded. Import only once in main AppModule.');
		}
	}
}
