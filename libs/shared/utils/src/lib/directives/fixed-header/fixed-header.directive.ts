import { Directive, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
	selector: '[hzaFixedHeader]'
})
export class FixedHeaderDirective implements AfterViewInit {
	constructor(private el: ElementRef, private renderer: Renderer2) {}

	ngAfterViewInit() {
		// get the viewport element
		const cdkViewport = this.el.nativeElement.closest('cdk-virtual-scroll-viewport');
		// check if table was already cloned
		const clonedHeader = cdkViewport.querySelectorAll('.cloned-header');
		// create a clone if not exists
		if (clonedHeader.length === 0) {
			const table = this.el.nativeElement.closest('table');
			const cloned = table.cloneNode(true);
			cloned.style.position = 'sticky';
			cloned.style.top = '0';
			cloned.style.zIndex = '100';
			// remove tbody with elements
			const tbody = cloned.querySelector('tbody');
			cloned.removeChild(tbody);
			// add a "helper" class
			this.renderer.addClass(cloned, 'cloned-header');
			// append cloned object to viewport
			cdkViewport.appendChild(cloned);
		}
		//
		// walk through all <tr> with their <td> and store the max value in an array
		//
		let width = [];
		const td = this.el.nativeElement.querySelectorAll('td');
		width = new Array(td.length).fill(0);
		td.forEach((item, index) => {
			const w = item.getBoundingClientRect().width;
			width[index] = Math.max(w, width[index]);
		});
		//
		// get <th> elements and apply the max-width values
		//
		const th = cdkViewport.querySelectorAll('.cloned-header th');
		th.forEach((item, index) => {
			this.renderer.setStyle(item, 'min-width', width[index] + 'px');
		});
	}
}
