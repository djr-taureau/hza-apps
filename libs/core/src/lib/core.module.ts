// core.module.ts
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreCoreModule, SharedDataAccessModule } from './+modules';

import { httpInterceptorProviders } from './http-interceptors';
import { ApiService, ApiEndpointService, EventBusService, NotificationService, CacheMapService } from './services';
import { LazyLoaderService } from './lazy-components/lazy-loader.service';
import { LAZY_WIDGETS } from './lazy-components/tokens';
import { lazyArrayToObj } from './lazy-components/lazy-widgets';

@NgModule({
	imports: [
		CoreCoreModule,
		SharedDataAccessModule.forRoot()
	],
	providers: [
		ApiEndpointService,
		ApiService,
		EventBusService,
		NotificationService,
		CacheMapService,
		LazyLoaderService,
		httpInterceptorProviders,
		{ provide: LAZY_WIDGETS, useFactory: lazyArrayToObj }
	]
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
