import { NgModule } from '@angular/core';
import { ApiEndpointService, ApiService } from '@hza/shared/services';
import { LoansService } from './loans.service';

@NgModule({
  imports: [],
  providers: [LoansService, ApiService, ApiEndpointService],
})
export class SharedLoansDataAccessDataModule {}
