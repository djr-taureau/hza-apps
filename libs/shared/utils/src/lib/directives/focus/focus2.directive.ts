import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, Input, OnChanges, PLATFORM_ID, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[hzaInputFocus]',
})
export class Focus2Directive implements OnChanges {
  @Input() appFocus: boolean = false;

  readonly isBrowser: boolean;

  constructor(private elementRef: ElementRef, @Inject(PLATFORM_ID) platformId: string, ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.appFocus && this.isBrowser) {
      this.elementRef.nativeElement.focus();
    }
  }
}