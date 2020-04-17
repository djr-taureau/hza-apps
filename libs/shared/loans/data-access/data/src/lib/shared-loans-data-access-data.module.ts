import { NgModule } from '@angular/core';
import { LoansService } from './loans.service';
import { ApiEndpointService, ApiService } from '@hza/core';
import { LoansResolver } from './loans.resolver';

@NgModule({
  imports: [],
  providers: [LoansService, LoansResolver, ApiService, ApiEndpointService],
})
export class SharedLoansDataAccessDataModule {}
