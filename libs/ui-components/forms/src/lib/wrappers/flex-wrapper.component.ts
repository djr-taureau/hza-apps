import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { FormlyTemplateOptions } from '@ngx-formly/core';

@Component({
	selector: 'hza-flex',
	template: `
    <div [fxFlex]="to.fxLayout">
      <ng-container #fieldComponent></ng-container>
    </div>
  `
})
export class FlexWrapperComponent extends FieldWrapper implements OnInit {
	@ViewChild('fieldComponent', { read: ViewContainerRef })
	fieldComponent: ViewContainerRef;

	to: FormlyTemplateOptions & { fxFlex: string };

	ngOnInit() {
		this.to.fxFlex = this.to.fxFlex || '';
	}
}
