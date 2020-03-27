import { NgModule } from '@angular/core';
import { OverlayModule, OverlayContainer, FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayCoreModule } from './+modules';
import { OverlayComponent } from './components/overlay/overlay.component';
import { YesNoComponent } from './components/yes-no/yes-no.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { OverlayService } from './services/overlay.service';
import { OpenFocusDirective } from './components/open-focus.directive'

const COMPONENTS = [OverlayComponent, YesNoComponent, SubscribeComponent, OpenFocusDirective];

@NgModule({
	declarations: COMPONENTS,
	imports: [OverlayModule, ReactiveFormsModule, OverlayCoreModule],
	exports: COMPONENTS,
  providers: [OverlayService, {provide: OverlayContainer, useClass: FullscreenOverlayContainer}],
	entryComponents: [OverlayComponent, YesNoComponent, SubscribeComponent]
})
export class UiComponentsOverlayModule {}
