import { AfterViewInit, Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
	selector: '[hzaFocus]',
})
export class FocusDirective implements AfterViewInit {
	constructor(private host: ElementRef) {}

	@HostBinding('attr.class')
	get hostClass(): string {
		return 'field-focus';
	}
	ngAfterViewInit() {
		this.host.nativeElement.focus();
	}
}
