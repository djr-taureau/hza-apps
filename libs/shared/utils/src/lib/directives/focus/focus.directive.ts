import { AfterViewInit, Directive, ElementRef, HostBinding, OnInit, Renderer2 } from '@angular/core';
import { MatInput } from '@angular/material/input';

@Directive({
	selector: '[hzaFocus]'
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

@Directive({
	selector: '[hzaAutofocus]'
})
export class MatInputFocusDirective implements OnInit {
	constructor(private matInput: MatInput, private renderer: Renderer2) {}

	ngOnInit() {
		const element = this.renderer.selectRootElement('#focus');
		setTimeout(() => element.focus(), 0);
	}
}
