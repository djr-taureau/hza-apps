// core.module.ts
import { NgModule } from '@angular/core';
import { SharedUtilsModule } from '@hza/shared/utils'
import { SharedDataAccessModule } from '@hza/shared/data-access';
import { ApiEndpointService } from './services/api-endpoint.service';
import { ApiService } from './services/api.service';

@NgModule({
  imports: [
    SharedUtilsModule,
    SharedDataAccessModule.forRoot(),
  ],
  providers: [ApiEndpointService, ApiService]
})
export class CoreModule {}