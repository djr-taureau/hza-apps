import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'hza-form-flex',
  template: `
    <div
      class="content" 
      [fxLayout]="to.fxLayout"
      [fxLayoutAlign]="to.fxLayoutAlign" 
      fxLayout.xs="column" 
      fxFlexFill
    >
      <formly-field *ngFor="let f of field.fieldGroup" [field]="f">
      </formly-field>
    </div>
  `,
})
export class FlexLayoutType extends FieldType {
}