// //tslint:disable:directive-selector no-input-rename
// import {
// 	Directive,
// 	Input,
// 	HostBinding,
// 	SimpleChanges,
// 	OnChanges
// } from '@angular/core';
// import { hydrateTemplate, Obj, TokenValueModifierFn } from '@hza/shared';

// export interface ITemplateSource {
// 	template?: string;
// 	message?: string;
// }

// const DOTS = /\./g;
// const TEMPLATE_TOKEN_CLASS = 'template-token';

// const wrapTokenValue = (value: any, slug: string, source: Obj) =>
// 	`<span class="${TEMPLATE_TOKEN_CLASS} ${TEMPLATE_TOKEN_CLASS}-${slug.replace(
// 		DOTS,
// 		'-'
// 	)}">${value}</span>`;

// @Directive({
// 	selector: '[hzaBindTemplate]'
// })
// export class BindTemplateDirective implements OnChanges {
// 	@Input() fsBindTemplate: ITemplateSource;
// 	@Input() wrapTokens = true;
// 	@Input() tokenModifers: Array<TokenValueModifierFn> = [];

// 	@HostBinding('innerHTML') boundHtml: string;

// 	constructor() {}

// 	ngOnChanges(changes: SimpleChanges) {
// 		if (changes.fsBindTemplate || changes.tokenModifers) {
// 			this.boundHtml = hydrateTemplate(
// 				this.fsBindTemplate.template || this.fsBindTemplate.message,
// 				this.fsBindTemplate,
// 				this.wrapTokens
// 					? [wrapTokenValue, ...this.tokenModifers]
// 					: this.tokenModifers
// 			);
// 		}
// 	}
// }
