import { HostListener, Directive, ViewChild, ViewContainerRef, EventEmitter } from '@angular/core';


@Directive({
	selector: 'input[hzaOpenFocus]',
	inputs: ['feature', 'navigateTo'],
	outputs: ['featureString']
})
export class OpenFocusDirective {
	feature: string;
	featureString: EventEmitter<string> = new EventEmitter<string>();
	constructor() {}

	@HostListener('focus', ['$event.target'])
	onFocus(formField) {
	 this.featureString.emit(this.feature);
	}
}
