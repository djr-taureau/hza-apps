import { OverlayRef } from '@angular/cdk/overlay';
import { CdkPortal, ComponentType } from '@angular/cdk/portal';
import { Directive, EventEmitter, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { OverlayService } from './../services/overlay.service';

@Directive({
	selector: 'input[hzaFocusModal], button[hzaFocusModal]',
	inputs: ['content']
})
export class OpenFocusDirective implements OnInit {
	overlayRef: OverlayRef;
	@ViewChild('overlayTemplate') overlayTemplate: CdkPortal;
	content = 'A simple string content modal overlay';

	subscribeData = null;

	constructor(private overlayService: OverlayService) {}

	@HostListener('focus', ['$event.target'])
	onFocus(formField) {
		console.log('focus', this.content);
		this.open(this.content);
	}

	@HostListener('hover', ['$event.target'])
	onHover(formField) {
		console.log('hover', this.content);
		this.open(this.content);
	}

	ngOnInit() {
		// console.log(this.content);
	}

	open(content: TemplateRef<any> | ComponentType<any> | string) {
		const ref = this.overlayService.open(content, null);

		ref.afterClosed$.subscribe((res) => {
			// if (typeof content === 'string') {
			// } else if (content === this.yesNoComponent) {
			// 	this.yesNoComponentResponse = res.data;
			// } else if (content === this.subscribeComponent) {
			// 	this.subscribeData = res.data;
			// } else {
			// 	this.yesNoTemplateResponse = res.data;
			// }
		});
	}
}

@Directive({
	selector: 'input[hzaOpenFocus]',
	inputs: ['feature', 'navigateTo'],
	outputs: ['featureString']
})
export class OpenModalDirective {
	feature: string;
	featureString: EventEmitter<string> = new EventEmitter<string>();
	constructor() {}

	@HostListener('focus', ['$event.target'])
	onFocus(formField) {
	 this.featureString.emit(this.feature);
	}
}
