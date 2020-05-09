import { NgModule, ComponentFactoryResolver } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUtilsModule } from '@hza/shared/utils';
import { ScrollingModule as NewScrollModule } from '@angular/cdk-experimental/scrolling'
import { PblNgridModule } from '@pebula/ngrid';
import { PblNgridDragModule } from '@pebula/ngrid/drag';
import { PblNgridTargetEventsModule } from '@pebula/ngrid/target-events';
import { PblNgridTransposeModule } from '@pebula/ngrid/transpose';
import { PblNgridBlockUiModule } from '@pebula/ngrid/block-ui';
import { PblNgridDetailRowModule } from '@pebula/ngrid/detail-row';
import { PblNgridStickyModule } from '@pebula/ngrid/sticky';
import { PblNgridStatePluginModule } from '@pebula/ngrid/state';
import { PblNgridMaterialModule } from '@pebula/ngrid-material';
import { CommonTableTemplatesComponent } from './components';

@NgModule({
	imports: [
		CommonModule,
		SharedUtilsModule,
		NewScrollModule,
		PblNgridModule.withCommon([{ component: CommonTableTemplatesComponent }]),
		PblNgridDragModule.withDefaultTemplates(),
		PblNgridTargetEventsModule,
		PblNgridBlockUiModule,
		PblNgridTransposeModule,
		PblNgridDetailRowModule,
		PblNgridStickyModule,
		PblNgridStatePluginModule,
		PblNgridMaterialModule
	],
	exports: [
		PblNgridModule,
		PblNgridDragModule,
		PblNgridTargetEventsModule,
		PblNgridBlockUiModule,
		PblNgridTransposeModule,
		PblNgridDetailRowModule,
		PblNgridStickyModule,
		PblNgridStatePluginModule,
		PblNgridMaterialModule
	],
	entryComponents: [CommonTableTemplatesComponent]
})
export class UiComponentsNgGridModule {}
