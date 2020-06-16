import { NgModule } from '@angular/core';
import { OverlayModule, OverlayContainer } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayCoreModule } from './+modules';
import { OverlayComponent } from './components/overlay/overlay.component';
import { OverlayService } from './services/overlay.service';
import { OpenFocusDirective, OpenModalDirective } from './components/open-focus.directive'
import { PopoverService } from './popover/popover.service';
import { PopoverComponent } from './popover/popover.component';
import { CdkOverlayContainer } from './popover/custom-overlay.container';
import { CdkOverlayContainerDirective } from './popover/cdk-overlay-container.directive';



const COMPONENTS = [OverlayComponent, PopoverComponent, OpenFocusDirective, OpenModalDirective, CdkOverlayContainerDirective];

@NgModule({
	declarations: COMPONENTS,
	imports: [OverlayCoreModule, OverlayModule, ReactiveFormsModule],
	exports: COMPONENTS,
  	providers: [PopoverService, OverlayService, { provide: OverlayContainer, useClass: CdkOverlayContainer }],
	entryComponents: [PopoverComponent, OverlayComponent]
})
export class UiComponentsOverlayModule {}
