// shared-data-access.module.ts
import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '@hza/shared/environments';
import { metaReducers, reducers } from './../+state/reducers';

@NgModule({
	imports: [
		StoreModule.forRoot(reducers, {
			metaReducers,
			runtimeChecks: {
				strictStateImmutability: true,
				strictActionImmutability: true,
				strictActionSerializability: true,
				strictStateSerializability: true
			}
		}),
		EffectsModule.forRoot([]),
		StoreDevtoolsModule.instrument({
			logOnly: environment.production,
			maxAge: 25
		}),
		StoreRouterConnectingModule.forRoot({
			stateKey: 'router',
			routerState: RouterState.Minimal
		})
	]
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
