import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { FormlyTemplateOptions } from '@ngx-formly/core';

@Component({
	selector: 'hza-flex-container-wrapper',
	template: `
    <div [fxLayout]="to.fxLayout" [fxLayoutAlign]="to.fxLayoutAlign">
      <ng-container #fieldComponent></ng-container>
    </div>
  `
})
export class FlexContainerWrapperComponent extends FieldWrapper implements OnInit {
	@ViewChild('fieldComponent', { read: ViewContainerRef })
	fieldComponent: ViewContainerRef;

	to: FormlyTemplateOptions & { fxLayout: string; fxLayoutAlign: string };

	ngOnInit() {
		this.to.fxLayout = this.to.fxLayout || 'row';
		this.to.fxLayoutAlign = this.to.fxLayoutAlign || 'start stretch';
	}
}
