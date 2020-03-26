import { NgModule } from '@angular/core';
import { CoreTableFixedVirtualScrollDirective } from './virtual-scroll.directive';

const COMPONENTS = [CoreTableFixedVirtualScrollDirective];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreTableVirtualScrollModule {}
