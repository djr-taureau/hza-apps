import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faEnvelope, faFilePdf, faFileWord, faFileExcel } from '@fortawesome/free-regular-svg-icons';

@NgModule({
	imports: [CommonModule, FontAwesomeModule],
	declarations: [],
	exports: [CommonModule, FontAwesomeModule]
})
export class FontAwesomeIconModule {
	constructor(faIconLibrary: FaIconLibrary) {
		faIconLibrary.addIcons(faEnvelope, faFilePdf, faFileWord, faFileExcel);
	}
}
