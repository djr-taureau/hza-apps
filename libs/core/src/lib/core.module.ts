// core.module.ts
import { NgModule } from '@angular/core';
import { SharedDataAccessModule } from '@hza/shared/data-access';

@NgModule({
  imports: [
    SharedDataAccessModule.forRoot(),
  ],
})
export class CoreModule {}