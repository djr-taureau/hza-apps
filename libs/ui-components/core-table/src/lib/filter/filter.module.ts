import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { CoreTableFilterComponent } from './filter.component';

const COMPONENTS = [
	CoreTableFilterComponent
];

@NgModule({
	declarations: COMPONENTS,
	exports: COMPONENTS,
	imports: [
		CommonModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatMenuModule,
		MatSelectModule,
		ReactiveFormsModule
	]
})
export class CoreTableFilterModule {}
