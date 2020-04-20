import { NgModule } from '@angular/core';
import { OverlayModule, OverlayContainer, FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayCoreModule } from './+modules';
import { OverlayComponent } from './components/overlay/overlay.component';
import { YesNoComponent } from './components/yes-no/yes-no.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { OverlayService } from './services/overlay.service';
import { OpenFocusDirective, OpenModalDirective } from './components/open-focus.directive'
import { PopoverComponent } from './popover/popover.component';
import { PopoverService } from './popover/popover.service';

const COMPONENTS = [PopoverComponent, OverlayComponent, YesNoComponent, SubscribeComponent, OpenFocusDirective, OpenModalDirective];

@NgModule({
	declarations: COMPONENTS,
	imports: [OverlayModule, ReactiveFormsModule, OverlayCoreModule],
	exports: COMPONENTS,
  	providers: [PopoverService, OverlayService, {provide: OverlayContainer, useClass: FullscreenOverlayContainer}],
	entryComponents: [PopoverComponent, OverlayComponent, YesNoComponent, SubscribeComponent]
})
export class UiComponentsOverlayModule {}
