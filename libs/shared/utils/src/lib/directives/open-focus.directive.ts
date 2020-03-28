import { HostListener, Directive } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: 'input[hzaOpenFocus]',
  inputs: ['navigateTo']
})
export class OpenFocusDirective {

  navigateTo: string
  constructor(private router: Router) { }
  
  @HostListener('focus', ['$event.target'])
	 onFocus(formField) {
		this.router.navigate([`${this.navigateTo}`]);
	}


}




