import { OverlayContainer } from '@angular/cdk/overlay';
import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[hzaAttachOverlayContainer]'
})
export class CdkOverlayContainerDirective {
    constructor(
      protected elementReference: ElementRef, 
      protected cdkOverlayContainer: OverlayContainer
      ) {
        this.elementReference    = elementReference;
        this.cdkOverlayContainer = cdkOverlayContainer;

        this.cdkOverlayContainer['hzaCreateContainer'](this.elementReference.nativeElement);
    }
}