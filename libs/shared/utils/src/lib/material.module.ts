import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { OverlayModule } from '@angular/cdk/overlay';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PortalModule } from '@angular/cdk/portal';
import { MatRadioModule } from '@angular/material/radio';

const MODULES = [
	CommonModule,
	MatButtonModule,
	MatSelectModule,
	MatTabsModule,
	MatInputModule,
	MatProgressSpinnerModule,
	MatChipsModule,
	MatCardModule,
	MatCheckboxModule,
	MatListModule,
	MatMenuModule,
	MatIconModule,
	MatSnackBarModule,
	MatSlideToggleModule,
	MatDividerModule,
	ClipboardModule,
	OverlayModule,
	ScrollingModule,
	MatProgressBarModule,
	MatMenuModule,
	MatAutocompleteModule,
	MatFormFieldModule,
	MatTooltipModule,
	PortalModule,
	MatRadioModule
];

@NgModule({
	imports: MODULES,
	declarations: [],
	exports: MODULES
})
export class MaterialModule {}
