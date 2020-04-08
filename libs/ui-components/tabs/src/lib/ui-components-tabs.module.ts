import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';
import { TabsTemplateComponent } from './components/tabs-template/tabs-template.component';

const COMPONENTS = [
   TabsTemplateComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    PortalModule,
  ],
  exports: COMPONENTS
})
export class UiComponentsTabsModule {}