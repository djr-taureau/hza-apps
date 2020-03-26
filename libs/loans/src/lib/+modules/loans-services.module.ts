import { NgModule } from '@angular/core';
import { LoansService, LoansResolver } from '../services';
import { LoansGuard } from '../guards/loans.guard';
import { ApiEndpointService, ApiService } from '@hza/core';

@NgModule({
  imports: [],
  providers: [LoansService, LoansGuard, LoansResolver, ApiService, ApiEndpointService],
})
export class LoansServicesModule {}
