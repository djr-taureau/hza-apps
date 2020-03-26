// shared-data-access.module.ts
import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
// import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '@hza/shared/environments';

import { metaReducers, reducers } from './reducers';


@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
      maxAge: 25,
    }),
    // StoreRouterConnectingModule.forRoot()
  ],
})
export class SharedDataAccessRootModule {}

@NgModule({})
export class SharedDataAccessModule {
  static forRoot(): ModuleWithProviders<SharedDataAccessRootModule> {
    return {
      ngModule: SharedDataAccessRootModule,
    };
  }
}
