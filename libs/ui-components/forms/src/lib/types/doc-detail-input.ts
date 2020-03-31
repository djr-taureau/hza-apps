import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
 selector: 'hza-doc-detail-input',
 template: `
   <input class="default-form" type="input" [formControl]="formControl" [formlyAttributes]="field">
 `,
})
export class DocDetailInput extends FieldType {}