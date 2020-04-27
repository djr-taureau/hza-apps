import { Directive, HostBinding, Input } from '@angular/core';


@Directive({
  selector: 'a[href]',
})
export class EmailLinkDirective {
  @HostBinding('attr.rel') relAttr = '';
  @HostBinding('attr.target') targetAttr = '';
  @HostBinding('attr.href') hrefAttr = '';
  @Input() href: string;

  constructor() {}

  ngOnChanges() {
    this.hrefAttr = this.href;
  
  }

}