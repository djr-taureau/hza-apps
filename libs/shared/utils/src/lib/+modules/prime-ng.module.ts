import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DeferModule } from 'primeng/defer';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { VirtualScrollerModule } from 'primeng/virtualscroller';

const MODULES = [
	CommonModule,
	InputMaskModule,
	TabMenuModule,
	TabViewModule,
	DeferModule,
	ProgressBarModule,
	ProgressSpinnerModule,
	AutoCompleteModule,
	CheckboxModule,
	DropdownModule,
	KeyFilterModule,
	InputSwitchModule,
	InputTextModule,
	InputTextareaModule,
	RadioButtonModule,
	ButtonModule,
	PaginatorModule,
	TableModule,
	VirtualScrollerModule,
	AccordionModule,
	OverlayPanelModule,
	TooltipModule
];

@NgModule({
	imports: MODULES,
	declarations: [],
	exports: MODULES
})
export class PrimeNgModule {}
