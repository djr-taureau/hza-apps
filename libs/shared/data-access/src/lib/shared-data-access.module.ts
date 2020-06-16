// shared-data-access.module.ts
import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {
	RouterState,
	routerReducer,
	StoreRouterConnectingModule,
	RouterStateSerializer,
	DefaultRouterStateSerializer
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '@hza/shared/environments';
import { metaReducers, ROOT_REDUCERS } from './+state/reducers';

@NgModule({
	imports: [
		StoreModule.forRoot(ROOT_REDUCERS, {
			metaReducers,
			runtimeChecks: {
				// strictStateImmutability and strictActionImmutability are enabled by default
				strictStateSerializability: true,
				strictActionSerializability: true,
				strictActionWithinNgZone: true
			}
		}),
		EffectsModule.forRoot([]),

		StoreDevtoolsModule.instrument({
			name: 'hza'
		}),
		StoreRouterConnectingModule.forRoot({ stateKey: 'router' })
	],
	providers: []
})
export class SharedDataAccessRootModule {}

@NgModule({})
export class SharedDataAccessModule {
	static forRoot(): ModuleWithProviders<SharedDataAccessRootModule> {
		return {
			ngModule: SharedDataAccessRootModule
		};
	}
}