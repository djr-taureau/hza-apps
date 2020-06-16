import { HostListener, Directive, ViewChild, ViewContainerRef, EventEmitter } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { getValueFromEvent } from '@hza/shared/utils'
@Directive({
	selector: '[hzaCopy]'
})
export class CopyableDirective {
	constructor(private clipboard: Clipboard) {}

	@HostListener('click', ['$event.target'])
	onclick($event) {
		this.copy($event.target.value);
	}

	copy(value) {
		return this.clipboard.copy(value);
	}
}
