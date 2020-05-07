import { NgModule } from '@angular/core';
import { UiComponentsCoreModule } from '@fay/ui-components';

const MODULES = [UiComponentsCoreModule];

@NgModule({
  imports: [MODULES],
  exports: [MODULES],
})
export class ValueListUIModule {}
