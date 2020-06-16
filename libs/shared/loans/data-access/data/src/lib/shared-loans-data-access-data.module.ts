import { NgModule } from '@angular/core';
import { ApiEndpointService, ApiService } from '@hza/core';
import { LoansService } from './loans.service';


@NgModule({
  imports: [],
  providers: [LoansService, ApiService, ApiEndpointService],
})
export class SharedLoansDataAccessDataModule {}
