import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, ApiEndpointService, EventBusService, NotificationService, CacheMapService, HttpBackendClient } from './services';

const PROVIDERS = [ApiService, ApiEndpointService, EventBusService, NotificationService, CacheMapService, HttpBackendClient]

@NgModule({
  imports: [CommonModule],
  providers: PROVIDERS
})
export class SharedServicesModule {}
