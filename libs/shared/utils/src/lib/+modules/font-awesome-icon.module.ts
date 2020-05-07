import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatIconRegistry } from '@angular/material/icon';

import { icon } from '@fortawesome/fontawesome-svg-core';

import { faEnvelope, faFilePdf, faFileWord, faFileExcel } from '@fortawesome/free-regular-svg-icons';

const faEnvelopeIcon = faEnvelope;
const faFilePdfIcon = faFilePdf;
const faFileWordIcon = faFileWord;
const faFileExcelIcon = faFileExcel;
@NgModule({
	imports: [CommonModule, FontAwesomeModule],
	declarations: [],
	exports: [CommonModule, FontAwesomeModule]
})
export class FontAwesomeIconModule {
	constructor(faIconLibrary: FaIconLibrary, registry: MatIconRegistry, sanitizer: DomSanitizer) {
		const svgEnvelope = icon(faEnvelopeIcon).html.join('');
		const svgPdf = icon(faFilePdfIcon).html.join('');
		const svgWord = icon(faFileWordIcon).html.join('');
		const svgExcel = icon(faFileExcelIcon).html.join('');
		registry.addSvgIconLiteral('faEnvelope', sanitizer.bypassSecurityTrustHtml(svgEnvelope));
		registry.addSvgIconLiteral('faFilePdf', sanitizer.bypassSecurityTrustHtml(svgPdf));
		registry.addSvgIconLiteral('faFileWord', sanitizer.bypassSecurityTrustHtml(svgWord));
		registry.addSvgIconLiteral('faFileExcel', sanitizer.bypassSecurityTrustHtml(svgExcel));
		faIconLibrary.addIcons(faEnvelope, faFilePdf, faFileWord, faFileExcel);
	}
}
