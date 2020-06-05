import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
	FillComponent
} from './components';


@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [
		FillComponent,
	],
	exports: [
		FillComponent,
	]
})
export class UiComponentsCoreModule {}
