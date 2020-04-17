import { NgModule } from '@angular/core';
import { LoansService, LoansResolver } from './services';
import { ApiEndpointService, ApiService } from '@hza/core';

@NgModule({
  imports: [],
  providers: [LoansService, LoansResolver, ApiService, ApiEndpointService],
})export class SharedLoansDataAccessDataModule {}
