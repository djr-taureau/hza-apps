import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { ApiEndpointService, ApiService } from '@hza/core';
=======
import { ApiEndpointService, ApiService } from '@hza/shared/services';
>>>>>>> new-deployment
import { LoansService } from './loans.service';


@NgModule({
  imports: [],
  providers: [LoansService, ApiService, ApiEndpointService],
})
export class SharedLoansDataAccessDataModule {}
