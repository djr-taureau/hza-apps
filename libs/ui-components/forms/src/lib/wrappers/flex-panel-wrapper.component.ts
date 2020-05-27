import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper, FormlyTemplateOptions } from '@ngx-formly/core';

@Component({
	selector: 'flex-formly-wrapper-panel',
	template: `
    <div [fxLayout]="to.fxLayout" [fxLayoutAlign]="to.fxLayoutAlign">
      <div class="form-label" [fxLayout]="to.fxLayoutLabel" [fxFlex]="to.fxFlexLabel">{{ to.label }}</div>
      <div class="form-spacer" [fxFlex]="to.fxFlexSpacer"></div>
      <div class="form-field" [fxLayoutAlign]="to.fxLayoutAlignField" [fxFlex]="to.fxFlexField">
        <ng-container #fieldComponent></ng-container>
      </div>
    </div>
  `
})
export class FlexPanelWrapperComponent extends FieldWrapper {
	@ViewChild('fieldComponent', { read: ViewContainerRef })
	fieldComponent: ViewContainerRef;
	to: FormlyTemplateOptions & {
		fxLayout: string;
		fxLayoutAlign: string;
		fxFlexLabel: string;
		fxFlexSpacer: string;
		fxFlexField: string;
		fxLayoutLabel: string;
		fxLayoutField: string;
		fxLayoutAlignLabel: string;
		fxLayoutAlignField: string;
	};

	ngOnInit() {
		this.to.fxLayout = this.to.fxLayout || 'row';
		this.to.fxLayoutAlign = this.to.fxLayoutAlign || 'space-around center';
		this.to.fxFlexLabel = this.to.fxFlexLabel || '40';
		this.to.fxFlexSpacer = this.to.fxFlexSpacer || '20';
		this.to.fxFlexField = this.to.fxFlexField || '40';
		// this.to.fxLayoutLabel = this.to.fxLayoutLabel || 'column';
		// this.to.fxLayoutField = this.to.fxLayoutField || 'column';
    this.to.fxLayoutAlignLabel = this.to.fxLayoutAlignLabel || 'start center';
		this.to.fxLayoutAlignField = this.to.fxLayoutAlignField || 'end center';
	}
}
