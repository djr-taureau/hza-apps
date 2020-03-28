import { HostListener, Directive } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
	selector: 'input[hzaOpenFocus]',
	inputs: ['feature', 'navigateTo']
})
export class OpenFocusDirective {
	feature: string;
	navigateTo: string;
	constructor(private router: Router) {}

	@HostListener('focus', ['$event.target'])
	onFocus(formField) {
		this.router.navigate([
			{
				outlets: {
					modal: ['loans']
				}
			}
		]);
	}
}

// this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);

['/docs', { outlets: { modal: 'loans' } }];
// { outlets: { primary: ['products'],sidebar: ['products'] } }
// this.router.navigate([{ outlets: { modal: [`${this.navigateTo}`] }}]);
