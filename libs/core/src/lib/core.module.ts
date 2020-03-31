// core.module.ts
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUtilsModule } from '@hza/shared/utils';
import { SharedDataAccessModule } from '@hza/shared/data-access';
import { httpInterceptorProviders } from './http-interceptors';
import { AppInitializerModule } from './init/app-initializer.module';
import { ApiService, ApiEndpointService, EventBusService, NotificationService, CacheMapService } from './services';
import { LazyLoaderService } from './lazy-components/lazy-loader.service';
import { LAZY_WIDGETS } from './lazy-components/tokens';
import { lazyArrayToObj } from './lazy-components/lazy-widgets';

@NgModule({
	imports: [CommonModule, AppInitializerModule, SharedUtilsModule, SharedDataAccessModule.forRoot()],
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
